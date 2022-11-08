<?php

namespace App\Controller;

use App\Entity\Asiento;
use App\Entity\ClienteReservacion;
use App\Entity\Estacion;
use App\Entity\Reservacion;
use App\Entity\RutaReservacion;
use App\Entity\SalidaReservacion;
use App\Form\ClienteReservacionType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\RutaReservacionType;
use App\Form\SalidaReservacionType;
use App\Repository\AsientoRepository;
use App\Repository\ReservacionRepository;
use App\Services\CybersourceApi;
use App\Services\RemoteDatabaseQueries;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Dompdf\Dompdf;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

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
            if (isset($reservacion)) {
                $entityManagerInterface->remove($reservacion);
            }
            $reservacion = new Reservacion();
            $entityManagerInterface->persist($reservacion);

            $reservacion->setRuta($ruta)->setIdaVuelta($form->get('ida_vuelta')->getData())->setPasoCompletado(1);
            if ($salida = $reservacion->getSalida()) {
                $entityManagerInterface->remove($salida);
            }
            if ($regreso = $reservacion->getRegreso()) {
                $entityManagerInterface->remove($regreso);
            }

            $entityManagerInterface->flush();

            $session = $request->getSession();
            $session->clear();
            $session->set('reservacion', $reservacion->getId());
            $request->getSession()->getMetadataBag()->stampNew();

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
    public function salidaForm(Request $request, Reservacion $reservacion, EntityManagerInterface $entityManagerInterface, RemoteDatabaseQueries $sistema, TranslatorInterface $translatorInterface, $ida_vuelta = null, $primer_render = null)
    {
        if ($ida_vuelta) {
            $salida_reservacion = $reservacion->getRegreso();
        } else {
            $salida_reservacion = $reservacion->getSalida();
        }
        if (!$salida_reservacion) {
            $salida_reservacion = new SalidaReservacion();
        }

        $salida_id = $salida_reservacion->getSalidaId();
        $fecha_vieja = $salida_reservacion->getSalidaFecha();

        $form = $this->createForm(SalidaReservacionType::class, $salida_reservacion, [
            'action' => $this->generateUrl('salida_form', ['reservacion' => $reservacion->getId(), 'ida_vuelta' => $ida_vuelta]),
            'ida_vuelta' => $ida_vuelta,
        ]);

        $session = $request->getSession();


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
            } else if ($salida_reservacion) {
                $fecha = $salida_reservacion->getSalidaFecha();
                $entityManagerInterface->remove($salida_reservacion);
                $salida_reservacion = (new SalidaReservacion())->setSalidaFecha($fecha);
                $entityManagerInterface->persist($salida_reservacion);
                $reservacion->setPasoCompletado(1);
            }

            if ($ida_vuelta) {
                $reservacion->setRegreso($salida_reservacion);
                if ($fecha_vieja != $salida_reservacion->getSalidaFecha()) {
                    $session->remove('salidas_vuelta');
                }
            } else {
                $reservacion->setSalida($salida_reservacion);
                if ($fecha_vieja != $salida_reservacion->getSalidaFecha()) {
                    $session->remove('salidas');
                }
            }

            $entityManagerInterface->flush();
        }

        if ($salida_reservacion->getSalidaFecha()) {
            if ($ida_vuelta) {
                if (!$session->has('salidas_vuelta')) {
                    if ($salidas = $sistema->getSalidas($reservacion->getRuta()->getEstacionLlegada()->getId(), $reservacion->getRuta()->getEstacionSalida()->getId(), $salida_reservacion->getSalidaFecha())) {
                        if (!isset($salidas['error'])) {
                            $session->set('salidas_vuelta', $salidas);
                        }
                    }
                } else {
                    $salidas = $session->get('salidas_vuelta');
                }
            } else {
                if (!$session->has('salidas')) {
                    if ($salidas = $sistema->getSalidas($reservacion->getRuta()->getEstacionSalida()->getId(), $reservacion->getRuta()->getEstacionLlegada()->getId(), $salida_reservacion->getSalidaFecha())) {
                        if (!isset($salidas['error'])) {
                            $session->set('salidas', $salidas);
                        }
                    }
                } else {
                    $salidas = $session->get('salidas');
                }
            }
            if (is_null($salidas)) {
                $sistema_conexion_error = $translatorInterface->trans('No se pudo establecer la conexión con el sistema de reserva. Por favor inténtelo más tarde');
            } else if (isset($salidas['error'])) {
                $sistema_conexion_error = $salidas['error'];
                $salidas = [];
            }
        }

        return $this->renderForm(
            'reservacion/salidaForm.html.twig',
            [
                'form' => $form,
                'ida_vuelta' => $ida_vuelta,
                'salida_reservacion' => $salida_reservacion,
                'salidas' => $salidas ?? null,
                'sistema_conexion_error' => $sistema_conexion_error ?? null,
                'primer_render' => $primer_render,
                'no_scroll' => $form->isSubmitted()
            ],
            new Response('', 200, ['session_terminada' => true])
        );
    }

    #[Route('/asientos/{reservacion}', name: 'asientos')]
    public function asientos(Reservacion $reservacion, Request $request, EntityManagerInterface $entityManagerInterface, TranslatorInterface $translatorInterface, RemoteDatabaseQueries $remoteDatabaseQueries, $primer_render = null): Response
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
                        return  json_encode($asientos->map(fn (Asiento $item) => ['id' => $item->getAsientoId(), 'numero' => $item->getNumero()])->toArray());
                    }
                    return null;
                },
                function ($asientos) {
                    return json_decode($asientos);
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
                            return  json_encode($asientos->map(fn (Asiento $item) => ['id' => $item->getAsientoId(), 'numero' => $item->getNumero()])->toArray());
                        }
                        return null;
                    },
                    function ($asientos) {
                        return json_decode($asientos);
                    }
                ));
        }

        $form = $form->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $array_ids = fn ($array) => array_map(fn ($i) => $i->id, $array);

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
                    if (!in_array($value->getAsientoId(), $array_ids($data['asientos_salida']))) {
                        $entityManagerInterface->remove($value);
                    } else {
                        unset($data['asientos_salida'][array_search($value->getAsientoId(), $array_ids($data['asientos_salida']))]);
                    }
                }
                foreach ($data['asientos_salida'] as  $value) {
                    $entityManagerInterface->persist((new Asiento)->setAsientoId($value->id)->setNumero($value->numero)->setSalidaReservacion($reservacion->getSalida()));
                    $entityManagerInterface->refresh($reservacion->getSalida());
                }

                if ($reservacion->isIdaVuelta()) {
                    if (empty($data['asientos_regreso'])) {
                        $errors[] = $translatorInterface->trans('Debe escoger al menos un asiento en el regreso');
                        if ($asientos = $reservacion->getRegreso()->getAsientos()->count()) {
                            foreach ($reservacion->getRegreso()->getAsientos() as $value) {
                                $entityManagerInterface->remove($value);
                            }
                            $entityManagerInterface->flush();
                        }
                    } else {
                        $asientos = $reservacion->getRegreso()->getAsientos();
                        foreach ($asientos as $value) {
                            if (!in_array($value->getAsientoId(), $array_ids($data['asientos_regreso']))) {
                                $entityManagerInterface->remove($value);
                            } else {
                                unset($data['asientos_regreso'][array_search($value->getAsientoId(), $array_ids($data['asientos_regreso']))]);
                            }
                        }
                        foreach ($data['asientos_regreso'] as  $value) {
                            $entityManagerInterface->persist((new Asiento)->setAsientoId($value->id)->setNumero($value->numero)->setSalidaReservacion($reservacion->getRegreso()));
                            $entityManagerInterface->refresh($reservacion->getRegreso());
                        }
                    }
                }

                $entityManagerInterface->flush();
                $entityManagerInterface->refresh($reservacion);

                try {
                    $precio = $remoteDatabaseQueries->getAsientosPrecios($reservacion);

                    if ($precio->error) {
                        $errors[] = $precio->error;
                    } else {
                        $reservacion->setPrecio($precio->total);
                        $reservacion->setPasoCompletado(3);
                        $entityManagerInterface->flush();
                        return $this->redirectToRoute('pagar', ['reservacion' => $reservacion->getId()]);
                    }
                } catch (\Throwable $th) {
                    $errors[] = $th->getMessage();
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

    #[Route('/test', name: 'test')]
    public function test(Request $request, ReservacionRepository $entityManagerInterface, MailerInterface $mailer, RemoteDatabaseQueries $remoteDatabaseQueries): Response
    {

        $reservacion = $entityManagerInterface->find($request->getSession()->get('reservacion', 49));

        $result = $remoteDatabaseQueries->anularReservacion($reservacion);

        dd($result);

        $dompdf = new Dompdf();
        $dompdf->loadHtml($this->render('pdf/factura.html.twig', ['reservacion' => $reservacion])->getContent());
        $dompdf->render();
        file_put_contents('facturas/factura.pdf', $dompdf->output());

        $response = new Response(file_get_contents('facturas/factura.pdf'));

        $disposition = HeaderUtils::makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            'foo.pdf'
        );
        $response->headers->set('Content-Disposition', $disposition);
        return $response;

        $email = (new Email())
            ->from('hello@example.com')
            ->to('you@example.com')
            //->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject('Time for Symfony Mailer!')
            ->text('Sending emails is fun again!')
            ->html('<p>See Twig integration for better HTML integration!</p>')
            ->attachFromPath('facturas/factura.pdf');

        $mailer->send($email);
        return $this->render('pdf/factura.html.twig', ['reservacion' => $reservacion]);
    }
    #[Route('/pagar/{reservacion}', name: 'pagar')]
    public function pagar(Reservacion $reservacion, Request $request, EntityManagerInterface $entityManagerInterface, CybersourceApi $cybersourceApi, RemoteDatabaseQueries $remoteDatabaseQueries, AsientoRepository $asientoRepository, TranslatorInterface $translatorInterface, $primer_render = null): Response
    {

        $cliente = new ClienteReservacion();

        $form = $this->createForm(ClienteReservacionType::class, $cliente, [
            'action' => $this->generateUrl('pagar', ['reservacion' => $reservacion?->getId()]),
            'reservacion' => $reservacion
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $reservacion->setCliente($cliente)->setMoneda($form->get('tipo_moneda')->getData());

            $result = $remoteDatabaseQueries->crearBoleto($reservacion);

            if (is_array($result) && isset($result['error'])) {
                if ($result['error'] == 1) {
                    $error = $translatorInterface->trans('Los asientos siguientes acaban de ser ocupados') . ': ';
                    foreach ($result['asientos'] as $index => $value) {
                        $asiento = $asientoRepository->findOneBy(['asiento_id' => $value]);
                        $error .= $asiento->getNumero();
                        if ($index < count($result['asientos']) - 1) {
                            $error .= ', ';
                        }
                        $entityManagerInterface->remove($asiento);
                    }
                    $this->addFlash(
                        'error_asientos_ocupados',
                        $error
                    );
                    $reservacion->setPasoCompletado(2);
                    $entityManagerInterface->flush();
                    return $this->redirectToRoute('asientos', ['reservacion' => $reservacion->getId()]);
                }
                $error_tarjeta = $result['error'];
            } else if (isset($result['success'])) {

                $data = json_decode($result['data']);

                $reservacion->setFacturaId($data->factura_id)->setFacturaDte($data->dte)->setBoletoTicketId($data->boletos_ticket)->setStatus(Reservacion::STATUS_COMPLETADA);

                $salida = $reservacion->getSalida();
                foreach ($salida->getAsientos() as $index => $asiento) {
                    $asiento->setBoletoId($data->boletos_salida[$index]);
                }

                if ($reservacion->isIdaVuelta()) {
                    $regreso = $reservacion->getRegreso();
                    foreach ($regreso->getAsientos() as $index => $asiento) {
                        $asiento->setBoletoId($data->boletos_regreso[$index]);
                    }
                }
                if (!$cliente->getClienteId()) {
                    $cliente->setClienteId($data->cliente_id);
                }
                $entityManagerInterface->flush();

                $resultado = $cybersourceApi->procesarPago($reservacion, $form->get('numero')->getData(), $form->get('expira_mes')->getData(), $form->get('expira_year')->getData(), $form->get('codigo_seguridad')->getData());

                if (is_array($resultado)) {
                    if (isset($resultado['status']) && $resultado['status'] == 'AUTHORIZED') {
                        $entityManagerInterface->persist($cliente);
                        $reservacion->setStatus(Reservacion::STATUS_COMPLETADA);
                        $reservacion->setTransaccionId($resultado['id'] ?? null);
                        $entityManagerInterface->flush();
                        return $this->redirectToRoute('confirmacion', ['reservacion' => $reservacion->getId()]);
                    } else {

                        $remoteDatabaseQueries->anularReservacion($reservacion);

                        if (isset($resultado["errorInformation"]) && !empty($resultado["errorInformation"])) {

                            $error_tarjeta = $translatorInterface->trans('No se pudo realizar el pago. Los datos de la tarjeta no son correctos.');
                            if (isset($resultado["errorInformation"]["message"])) {
                                $error_tarjeta .= ' ' . $resultado["errorInformation"]["message"];
                            }
                        }
                    }
                } else if ($resultado == 400) {
                    $error_tarjeta = $translatorInterface->trans('No se pudo realizar el pago. Los datos de la tarjeta no son correctos.');
                } else if ($resultado == 502) {
                    $error_tarjeta = $translatorInterface->trans('No se pudo realizar el pago. Los datos de la tarjeta no son correctos.');
                }
            }

            $entityManagerInterface->flush();
        }

        return $this->renderForm('reservacion/pagar.html.twig', [
            'form' => $form,
            'primer_render' => $primer_render,
            'reservacion' => $reservacion,
            'error_tarjeta' => $error_tarjeta ?? null
        ]);
    }

    #[Route('/confirmacion/{reservacion}', name: 'confirmacion')]
    public function confirmacion(Request $request, Reservacion $reservacion, TranslatorInterface $translatorInterface, MailerInterface $mailer, Filesystem $filesystem): Response
    {

        $pdf_nombre = $translatorInterface->trans('boleto') . '_' . $reservacion->getBoletoTicketId() . '.pdf';

        if (!$filesystem->exists('facturas/' . $pdf_nombre)) {

            $dompdf = new Dompdf();
            $dompdf->loadHtml($this->render('pdf/factura.html.twig', ['reservacion' => $reservacion])->getContent());
            $dompdf->render();
            $filesystem->dumpFile('facturas/' . $pdf_nombre, $dompdf->output());
        }

        if ($reservacion->getCliente()->getEmail()) {
            $email = (new Email())
                ->from('reservacion@transportesfuentedelnorte.com')
                ->to($reservacion->getCliente()->getEmail())
                ->priority(Email::PRIORITY_HIGH)
                ->subject($translatorInterface->trans('Boleto Transporte Fuente del Norte. Servcio de Bus. Guatemala.'))
                ->text($translatorInterface->trans('Boleto Transporte Fuente del Norte. Servcio de Bus. Guatemala.'))
                ->html($this->renderView('pdf/factura.html.twig', ['reservacion' => $reservacion]))
                ->attachFromPath('facturas/' . $pdf_nombre);

            $mailer->send($email);
        }

        $request->getSession()->clear();

        return $this->renderForm('reservacion/confirmacion.html.twig', [
            'reservacion' => $reservacion
        ]);
    }

    #[Route('/pdf/{reservacion}', name: 'pdf')]
    public function pdf(Reservacion $reservacion, TranslatorInterface $translatorInterface): Response
    {
        $pdf_nombre = $translatorInterface->trans('boleto') . '_' . $reservacion->getBoletoTicketId() . '.pdf';

        $response = new Response(file_get_contents('facturas/' . $pdf_nombre));

        $disposition = HeaderUtils::makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            $pdf_nombre
        );
        $response->headers->set('Content-Disposition', $disposition);
        return $response;
    }

    #[Route('/cancelar', name: 'cancelar')]
    public function cancelar(Request $request, EntityManagerInterface $entityManagerInterface): Response
    {
        if ($reservacion_id = $request->getSession()->get('reservacion')) {

            $reservacion = $entityManagerInterface->find(Reservacion::class, $reservacion_id);
            $reservacion->setStatus(Reservacion::STATUS_CANCELADA);
            $entityManagerInterface->flush();

            $session = $request->getSession();
            $session->clear();
            $session->set('_to_kepp_locale', true);
        }
        return new RedirectResponse($this->generateUrl('inicio'));
    }
}
