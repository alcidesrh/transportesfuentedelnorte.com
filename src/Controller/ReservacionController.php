<?php

namespace App\Controller;

use App\Entity\Asiento;
use App\Entity\Reservacion;
use App\Entity\RutaReservacion;
use App\Entity\SalidaReservacion;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\RutaReservacionType;
use App\Form\SalidaReservacionType;
use App\Services\RemoteDatabaseQueries;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Error;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;

class ReservacionController extends AbstractController
{
    #[Route('/ruta-form/{reservacion}', name: 'ruta')]
    public function ruta(Request $request, EntityManagerInterface $entityManagerInterface,  Reservacion $reservacion = null, $primer_render = null): Response
    {

        if ($reservacion) {
            $ruta = $reservacion->getRuta();
        } else {
            $ruta = new RutaReservacion();
        }

        $form = $this->createForm(RutaReservacionType::class, $ruta, [
            'action' => $this->generateUrl('ruta', ['reservacion' => $reservacion?->getId()]),
            'reservacion' => $reservacion
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$ruta->getId()) {
                $entityManagerInterface->persist($ruta);
            }
            if (!isset($reservacion)) {
                $reservacion = new Reservacion();
                $entityManagerInterface->persist($reservacion);
            }
            $reservacion->setRuta($ruta)->setIdaVuelta($form->get('ida_vuelta')->getData())->setPasoCompletado(1);
            if ($salida = $reservacion->getSalida()) {
                $entityManagerInterface->remove($salida);
            }
            if ($regreso = $reservacion->getRegreso()) {
                $entityManagerInterface->remove($regreso);
            }
            $entityManagerInterface->flush();
            $request->getSession()->set('reservacion', $reservacion->getId());

            return $this->redirectToRoute('salida', ['reservacion' => $reservacion->getId()]);
        }

        return $this->renderForm('reservacion/ruta.html.twig', [
            'form' => $form,
            'primer_render' => $primer_render
        ]);
    }

    #[Route('/salida/{reservacion}', name: 'salida')]
    public function salida(Reservacion $reservacion, Request $request, EntityManagerInterface $entityManagerInterface, TranslatorInterface $translatorInterface, $primer_render = null): Response
    {
        $errors = [];
        if ($request->query->has('siguiente')) {
            if (!$reservacion->getSalida() || !$reservacion->getSalida()->getSalidaId()) {
                $errors[] = $translatorInterface->trans('Debe definir la salida');
            }
            if ($reservacion->isIdaVuelta() && (!$reservacion->getRegreso() || !$reservacion->getRegreso()->getSalidaId())) {
                $errors[] = $translatorInterface->trans('Debe definir el regreso');
            }
            if (empty($errors)) {
                $reservacion->setPasoCompletado(2);
                $entityManagerInterface->persist($reservacion);
                $entityManagerInterface->flush();
                return $this->redirectToRoute('asientos', ['reservacion' => $reservacion->getId()]);
            }
        }
        return $this->render('reservacion/salida.html.twig', [
            'ida_vuelta' => $reservacion->isIdaVuelta(),
            'reservacion_id' => $reservacion->getId(),
            'errors' => $errors,
            'primer_render' => $primer_render
        ]);
    }

    #[Route('/salida-form/{reservacion}/{ida_vuelta}', name: 'salida_form')]
    public function salidaForm(Request $request, Reservacion $reservacion, EntityManagerInterface $entityManagerInterface, RemoteDatabaseQueries $sistema, TranslatorInterface $translatorInterface, $ida_vuelta = null, $primer_render = null): Response
    {

        if ($ida_vuelta) {
            $salida_reservacion = $reservacion->getRegreso();
        } else {
            $salida_reservacion = $reservacion->getSalida();
        }
        if (!$salida_reservacion) {
            $salida_reservacion = new SalidaReservacion();
        }

        $form = $this->createForm(SalidaReservacionType::class, $salida_reservacion, [
            'action' => $this->generateUrl('salida_form', ['reservacion' => $reservacion->getId(), 'ida_vuelta' => $ida_vuelta]),
            'ida_vuelta' => $ida_vuelta,
        ]);

        $salida_id = $salida_reservacion->getSalidaId();

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid() && $salida_reservacion->getSalidaId()) {

                if (!$salida_reservacion->getId()) {
                    $entityManagerInterface->persist($salida_reservacion);

                    $form = $this->createForm(SalidaReservacionType::class, $salida_reservacion, [
                        'action' => $this->generateUrl('salida_form', ['reservacion' => $reservacion->getId(), 'ida_vuelta' => $ida_vuelta]),
                        'ida_vuelta' => $ida_vuelta,
                    ]);
                } else if ($salida_id != $salida_reservacion->getSalidaId()) {

                    foreach ($salida_reservacion->getAsientos() as $value) {
                        $entityManagerInterface->remove($value);
                    }
                }
                $no_scroll = true;
            } else if ($salida_reservacion) {
                $fecha = $salida_reservacion->getSalidaFecha();
                $entityManagerInterface->remove($salida_reservacion);
                $salida_reservacion = (new SalidaReservacion())->setSalidaFecha($fecha);
                $entityManagerInterface->persist($salida_reservacion);
                $reservacion->setPasoCompletado(1);
            }

            if ($ida_vuelta) {
                $reservacion->setRegreso($salida_reservacion);
            } else {
                $reservacion->setSalida($salida_reservacion);
            }

            $entityManagerInterface->flush();
        }


        if ($salida_reservacion->getSalidaFecha()) {
            if (!($salidas = $sistema->getSalidas($salida_reservacion->getSalidaFecha()))) {
                $sistema_conexion_error = $translatorInterface->trans('No se pudo establecer la conexión con el sistema de reserva. Por favor inténtelo más tarde');
            }
        }
        return $this->renderForm('reservacion/salidaForm.html.twig', [
            'form' => $form,
            'ida_vuelta' => $ida_vuelta,
            'salida_reservacion' => $salida_reservacion,
            'salidas' => $salidas ?? null,
            'sistema_conexion_error' => $sistema_conexion_error ?? null,
            'primer_render' => $primer_render,
            'no_scroll' => $no_scroll ?? false
        ]);
    }

    #[Route('/asientos/{reservacion}', name: 'asientos')]
    public function asientos(Reservacion $reservacion, Request $request, EntityManagerInterface $entityManagerInterface, TranslatorInterface $translatorInterface, $primer_render = null): Response
    {
        $errors = [];

        $form = $this->createFormBuilder()
            ->add('asientos_salida', TextType::class, [
                'required' => false,
                'data' => $reservacion->getSalida()?->getAsientos(),
                'data_class' => null
            ]);
        $form->get('asientos_salida')
            ->addModelTransformer(new CallbackTransformer(
                function (Collection|null $asientos = null) {
                    if ($asientos) {
                        return  json_encode($asientos->map(fn (Asiento $item) => $item->getAsientoId())->toArray());
                    }
                    return null;
                },
                function ($ids) {
                    return json_decode($ids);
                }
            ));

        if ($reservacion->isIdaVuelta()) {
            $form->add('asientos_regreso', TextType::class, [
                'required' => false,
                'data' => $reservacion->getRegreso()?->getAsientos(),
                'data_class' => null
            ]);
            $form->get('asientos_regreso')
                ->addModelTransformer(new CallbackTransformer(
                    function (Collection|null $asientos = null) {
                        if ($asientos) {
                            return  json_encode($asientos->map(fn (Asiento $item) => $item->getAsientoId())->toArray());
                        }
                        return null;
                    },
                    function ($ids) {
                        return json_decode($ids);
                    }
                ));
        }

        $form = $form->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            if (empty($data['asientos_salida'])) {
                $errors[] = $translatorInterface->trans('Debe escoger al menos un asiento en la salida');
                if ($asientos = $reservacion->getSalida()->getAsientos()->count()) {
                    foreach ($reservacion->getSalida()->getAsientos() as $value) {
                        $entityManagerInterface->remove($value);
                    }
                    $entityManagerInterface->flush();
                }
            } else {
                $asientos = $reservacion->getSalida()->getAsientos();
                foreach ($asientos as $value) {
                    if (!in_array($value->getAsientoId(), $data['asientos_salida'])) {
                        $entityManagerInterface->remove($value);
                    } else {
                        unset($data['asientos_salida'][array_search($value->getAsientoId(), $data['asientos_salida'])]);
                    }
                }
                foreach ($data['asientos_salida'] as  $value) {
                    $entityManagerInterface->persist((new Asiento)->setAsientoId($value)->setSalidaReservacion($reservacion->getSalida()));
                    $entityManagerInterface->refresh($reservacion->getSalida());
                }

                if ($reservacion->isIdaVuelta()) {
                    if (empty($data['asientos_regreso'])) {
                        $errors[] = $translatorInterface->trans('Debe escoger al menos un asiento en el regreso');
                        if ($asientos = $reservacion->getRegreso()->getAsientos()->count()) {
                            foreach ($reservacion->getSalida()->getAsientos() as $value) {
                                $entityManagerInterface->remove($value);
                            }
                            $entityManagerInterface->flush();
                        }
                    } else {
                        $asientos = $reservacion->getRegreso()->getAsientos();
                        foreach ($asientos as $value) {
                            if (!in_array($value->getAsientoId(), $data['asientos_regreso'])) {
                                $entityManagerInterface->remove($value);
                            } else {
                                unset($data['asientos_regreso'][array_search($value->getAsientoId(), $data['asientos_regreso'])]);
                            }
                        }
                        foreach ($data['asientos_regreso'] as  $value) {
                            $entityManagerInterface->persist((new Asiento)->setAsientoId($value)->setSalidaReservacion($reservacion->getRegreso()));
                            $entityManagerInterface->refresh($reservacion->getRegreso());
                        }
                    }
                }
                $entityManagerInterface->flush();
            }
        }

        return $this->renderForm('reservacion/asiento.html.twig', [
            'reservacion' => $reservacion,
            'errors' => $errors,
            'form' => $form,
            'primer_render' => $primer_render
        ]);
    }

    #[Route('/asiento-lista/{id}', name: 'asiento-lista')]
    public function getAsientos(SalidaReservacion $salida, RemoteDatabaseQueries $sistema, TranslatorInterface $translatorInterface, $regreso = null): Response
    {
        if ($result = $sistema->getAsientos($salida->getSalidaId())) {
            list($asientos, $senales) = $result;
            $parseAsientos = function (SalidaReservacion $salida, $asientos, $nivel1 = true) {
                return array_map(function ($item) use ($salida) {
                    if ($asientos_elegidos = $salida->getAsientos()) {
                        if (in_array($item['id'], $asientos_elegidos->map(fn (Asiento $item) => $item->getAsientoId())->toArray())) {
                            $item['elegido'] = true;
                        }
                    }
                    return $item;
                }, array_filter($asientos, fn ($item) => $nivel1 ? !$item['nivel2'] : $item['nivel2']));
            };
            $asientos_nivel_1 = $parseAsientos($salida, $asientos);

            $asientos_nivel_2 = $parseAsientos($salida, $asientos, false); //array_filter($asientos, fn ($item) => $item['nivel2']);

            $senales_nivel_1 = array_filter($senales, fn ($item) => !$item['nivel2']);
            $senales_nivel_2 = array_filter($senales, fn ($item) => $item['nivel2']);
        } else {
            $sistema_conexion_error = $translatorInterface->trans('No se pudo establecer la conexión con el sistema de reserva. Por favor inténtelo más tarde');
        }

        return $this->render('reservacion/_asiento_lista.html.twig', [
            'asientos_nivel_1' => $asientos_nivel_1 ?? [],
            'senales_nivel_1' => $senales_nivel_1 ?? [],
            'asientos_nivel_2' => $asientos_nivel_2 ?? [],
            'senales_nivel_2' => $senales_nivel_2 ?? [],
            'sistema_conexion_error' => $sistema_conexion_error ?? null,
            'regreso' => $regreso
        ]);
    }
}
