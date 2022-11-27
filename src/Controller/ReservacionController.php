<?php

namespace App\Controller;

use App\Entity\Archivo;
use Dompdf\Dompdf;
use App\Entity\Asiento;
use App\Entity\Reservacion;
use App\Entity\Configuracion;
use App\Entity\RutaReservacion;
use App\Services\CybersourceApi;
use App\Entity\SalidaReservacion;
use App\Form\RutaReservacionType;
use Symfony\Component\Mime\Email;
use App\Entity\ClienteReservacion;
use App\Entity\Countries;
use App\Entity\States;
use App\Form\SalidaReservacionType;
use App\Form\ClienteReservacionType;
use App\Form\Type\CiudadAutocompleteType;
use App\Form\Type\PaisAutocompleteType;
use App\Form\Type\ProvinciaAutocompleteType;
use App\Repository\AsientoRepository;
use App\Services\RemoteDatabaseQueries;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Filesystem\Exception\IOException;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

class ReservacionController extends AbstractController
{

    #[Route('/ruta-form', name: 'ruta')]
    public function ruta(Reservacion $reservacion = null, Request $request, EntityManagerInterface $entityManagerInterface, $primer_render = null): Response
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
            $ip = $request->getClientIp();
            $reservacion->setTransaccionId($request->getClientIp()); //quitar

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

    #[Route('/salida', name: 'salida')]
    public function salida(Reservacion $reservacion = null, Request $request, EntityManagerInterface $entityManagerInterface, TranslatorInterface $translatorInterface, $primer_render = null): Response
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

    #[Route('/salida-form/{ida_vuelta}', name: 'salida_form')]
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
                'form_submitted' => $form->isSubmitted()
            ],
            new Response('', 200, ['session_terminada' => true])
        );
    }

    #[Route('/asientos', name: 'asientos')]
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
                        if ($confi = $entityManagerInterface->getRepository(Configuracion::class)->findOneBy([])) {
                            $reservacion->setCompraPorcientoActual($confi->getCompraPorciento());
                            $reservacion->setDolarCambioActual($confi->getDolarCambio());
                        }
                        $reservacion->setPrecioReal($precio->total)->setPrecio($precio->total)->setPrecioDolar($precio->total);
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

    #[Route('/pagar', name: 'pagar')]
    public function pagar(Reservacion $reservacion, Request $request, EntityManagerInterface $entityManagerInterface, RemoteDatabaseQueries $remoteDatabaseQueries, AsientoRepository $asientoRepository, TranslatorInterface $translatorInterface, $primer_render = null): Response
    {

        $cliente = $reservacion->getCliente() ?? new ClienteReservacion();

        $form = $this->createForm(ClienteReservacionType::class, $cliente, [
            'action' => $this->generateUrl('pagar', ['reservacion' => $reservacion->getId()]),
            'reservacion' => $reservacion
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // $result = $remoteDatabaseQueries->crearBoleto($reservacion);

            // if (is_array($result) && isset($result['error'])) {
            //     if ($result['error'] == 1) {
            //         $error = $translatorInterface->trans('Los asientos siguientes acaban de ser ocupados') . ': ';
            //         foreach ($result['asientos'] as $index => $value) {
            //             $asiento = $asientoRepository->findOneBy(['asiento_id' => $value]);
            //             $error .= $asiento->getNumero();
            //             if ($index < count($result['asientos']) - 1) {
            //                 $error .= ', ';
            //             }
            //             $entityManagerInterface->remove($asiento);
            //         }
            //         $this->addFlash(
            //             'error_asientos_ocupados',
            //             $error
            //         );
            //         $reservacion->setPasoCompletado(2);
            //         $entityManagerInterface->flush();
            //         return $this->redirectToRoute('asientos', ['reservacion' => $reservacion->getId()]);
            //     }
            //     $error_tarjeta = isset($result['texto']) ? $result['texto'] : $result['error'];
            // } else 
            if (true || isset($result['success'])) {

                // $data = json_decode($result['data']);

                // $reservacion->setFacturaId($data->factura_id)->setFacturaDte($data->dte)->setBoletoTicketId($data->boletos_ticket);

                // $salida = $reservacion->getSalida();
                // foreach ($salida->getAsientos() as $index => $asiento) {
                //     $asiento->setBoletoId($data->boletos_salida[$index]);
                // }

                // if ($reservacion->isIdaVuelta()) {
                //     $regreso = $reservacion->getRegreso();
                //     foreach ($regreso->getAsientos() as $index => $asiento) {
                //         $asiento->setBoletoId($data->boletos_regreso[$index]);
                //     }
                // }
                // if (!$cliente->getClienteId()) {
                //     $cliente->setClienteId($data->cliente_id);
                // }
                // $entityManagerInterface->flush();

                // $resultado = $cybersourceApi->procesarPago($reservacion, $form->get('numero')->getData(), $form->get('expira_mes')->getData(), $form->get('expira_year')->getData(), $form->get('codigo_seguridad')->getData(), $request->getSession()->getId());

                $entityManagerInterface->persist($cliente);
                $reservacion->setCliente($cliente);
                $reservacion->setStatus(Reservacion::STATUS_COMPLETADA);
                $reservacion->setTransaccionId(125747945354 ?? null);
                $reservacion->setPasoCompletado(4);
                $entityManagerInterface->flush();
                return $this->redirectToRoute('3d-secure-iframe-device');
                // return $this->redirectToRoute('confirmacion', ['reservacion' => $reservacion->getId()]);


                // if (false) {
                //     if (is_array($resultado)) {
                //         if (isset($resultado['status']) && $resultado['status'] == 'AUTHORIZED') {
                //             $entityManagerInterface->persist($cliente);
                //             $reservacion->setStatus(Reservacion::STATUS_COMPLETADA);
                //             $reservacion->setTransaccionId($resultado['id'] ?? null);
                //             $reservacion->setPasoCompletado(4);
                //             $entityManagerInterface->flush();
                //             return $this->redirectToRoute('confirmacion', ['reservacion' => $reservacion->getId()]);
                //         } else {

                //             $remoteDatabaseQueries->anularReservacion($reservacion);

                //             if (isset($resultado["errorInformation"]) && !empty($resultado["errorInformation"])) {

                //                 $error_tarjeta = $translatorInterface->trans('No se pudo realizar el pago. Los datos de la tarjeta no son correctos.');
                //                 if (isset($resultado["errorInformation"]["message"])) {
                //                     $error_tarjeta .= ' ' . $resultado["errorInformation"]["message"];
                //                 }
                //             }
                //         }
                //     } else if ($resultado == 400) {
                //         $error_tarjeta = $translatorInterface->trans('No se pudo realizar el pago. Los datos de la tarjeta no son correctos.');
                //     } else if ($resultado == 502) {
                //         $error_tarjeta = $translatorInterface->trans('No se pudo realizar el pago. Los datos de la tarjeta no son correctos.');
                //     }
                // }
            }

            $entityManagerInterface->flush();
        }
        $data = $request->request->all();

        return $this->renderForm('reservacion/pagar.html.twig', [
            'form' => $form,
            'primer_render' => $primer_render,
            'reservacion' => $reservacion,
            'error_tarjeta' => $error_tarjeta ?? null,
            'd_secure' => $entityManagerInterface->getRepository(Archivo::class)->findOneBy(['slug' => '3d-secure-2']),
        ]);
    }

    #[Route('/confirmacion', name: 'confirmacion')]
    public function confirmacion(Request $request, Reservacion $reservacion, TranslatorInterface $translatorInterface, MailerInterface $mailer, Filesystem $filesystem): Response
    {

        $pdf_nombre = $translatorInterface->trans('boleto') . '_' . $reservacion->getBoletoTicketId() . '.pdf';

        $locale = $request->getLocale() == 'es' ? 'en' : 'es';

        $pdf_nombre_2 = $translatorInterface->trans('boleto', [], null, $locale) . '_' . $reservacion->getBoletoTicketId() . '.pdf';

        if (!$filesystem->exists('facturas/' . $pdf_nombre) && !$filesystem->exists('facturas/' . $pdf_nombre_2)) {

            try {

                $dompdf = new Dompdf();
                $dompdf->loadHtml($this->render('pdf/factura.html.twig', ['reservacion' => $reservacion])->getContent());
                $dompdf->render();
                $filesystem->dumpFile('facturas/' . $pdf_nombre, $dompdf->output());
            } catch (IOException $th) {
                return $this->renderForm('reservacion/confirmacion.html.twig', [
                    'error' => 'pdf',
                    'reservacion' => $reservacion
                ]);
            }

            if ($reservacion->getCliente()->getEmail()) {
                $email = (new Email())
                    ->from('reservacion@transportesfuentedelnorte.com')
                    ->to($reservacion->getCliente()->getEmail())
                    ->priority(Email::PRIORITY_HIGH)
                    ->subject($translatorInterface->trans('Boleto de Bus Transporte Fuente del Norte. Servicio de Bus. Guatemala.'))
                    ->text($translatorInterface->trans('Boleto de Bus Transporte Fuente del Norte. Servicio de Bus. Guatemala.'))
                    ->html($this->renderView('pdf/factura.html.twig', ['reservacion' => $reservacion]))
                    ->attachFromPath('facturas/' . $pdf_nombre);

                $mailer->send($email);
            }
        } else {
            $no_descargar = true;
        }

        return $this->renderForm('reservacion/confirmacion.html.twig', [
            'reservacion' => $reservacion,
            'descargar' => (int) !isset($no_descargar)
        ]);
    }

    #[Route('/pdf/{id}', name: 'pdf')]
    public function pdf(Reservacion $reservacion, TranslatorInterface $translatorInterface): Response
    {
        $pdf_nombre = $translatorInterface->trans('boleto') . '_' . $reservacion->getBoletoTicketId() . '.pdf';

        $response = new Response(file_get_contents('facturas/' . $pdf_nombre));

        $disposition = HeaderUtils::makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            $pdf_nombre
        );
        $response->headers->set('Content-Disposition', $disposition);
        $response->headers->set('Content-Type', 'application/pdf');
        return $response;
    }

    #[Route('/cancelar', name: 'cancelar')]
    public function cancelar(Request $request, EntityManagerInterface $entityManagerInterface): Response
    {
        if ($reservacion_id = $request->getSession()->get('reservacion')) {

            $reservacion = $entityManagerInterface->find(Reservacion::class, $reservacion_id);
            if ($reservacion->getStatus() != Reservacion::STATUS_COMPLETADA) {
                $reservacion->setStatus(Reservacion::STATUS_CANCELADA);
                $entityManagerInterface->flush();
            }

            $session = $request->getSession();
            $session->clear();
            $session->set('_to_kepp_locale', true);
        }
        return new RedirectResponse($this->generateUrl('inicio'));
    }

    #[Route('/pais', name: 'pais')]
    public function pais(FormFactoryInterface $formFactoryInterface, Reservacion $reservacion): Response
    {
        return $this->renderForm('reservacion/_pais.html.twig', ['form' => $formFactoryInterface->createNamed('cliente_reservacion', PaisAutocompleteType::class, $reservacion->getCliente()?->getPais())]);
    }

    #[Route('/provincias/{country}', name: 'provincias')]
    public function states(FormFactoryInterface $formFactoryInterface, Reservacion $reservacion, ?Countries $country = null): Response
    {

        return $this->renderForm('reservacion/_provincias.html.twig', ['form' => $formFactoryInterface->createNamed(
            'cliente_reservacion',
            ProvinciaAutocompleteType::class,
            $reservacion->getCliente()?->getProvincia(),
            ['pais' => $country]
        )]);
    }

    #[Route('/ciudad/{provincia}', name: 'ciudad')]
    public function municipios(Request $request, FormFactoryInterface $formFactoryInterface, Reservacion $reservacion, ?States $provincia = null): Response
    {
        return $this->renderForm('reservacion/_municipios.html.twig', ['form' => $formFactoryInterface->createNamed(
            'cliente_reservacion',
            CiudadAutocompleteType::class,
            $reservacion->getCliente()?->getCiudad(),
            ['provincia' => $provincia ?? ($request->get('reset') ? false : null)]
        )]);
    }

    #[Route('/iframe', name: '3d-secure-iframe-device')]
    public function iframe(HubInterface $hub, EntityManagerInterface $entityManagerInterface, Request $request, CybersourceApi $cybersourceApi, Reservacion $reservacion = null): Response
    {

        $update = new Update(
            'cybersource_enroll_callback',
            json_encode(['status' => 'OutOfStock'])
        );
        $eee = $hub->getUrl();
        $hub->publish($update);

        $reservacion = $entityManagerInterface->getRepository(Reservacion::class)->find(957);

        if (true || $a = $request->request->all()) {

            // $result = $cybersourceApi->request('authentication_1__setup_service', [
            //     'paymentInformation' => [
            //         'card' => [
            //             'type' => 001,
            //             'expirationMonth' => '01', //$numero,
            //             'expirationYear' => 2025, //$codigo_seguridad,
            //             'number' => 4456530000001096, //$expira_mes,
            //         ],
            //     ]
            // ]);


            return $this->render('reservacion/_3d_secure_iframe.html.twig', [
                // 'deviceDataCollectionUrl' => $result["consumerAuthenticationInformation"]["deviceDataCollectionUrl"],
                // 'accessToken' => $result["consumerAuthenticationInformation"]["accessToken"]
            ]);

            // $result["clientReferenceInformation"]["code"]
            // $result["consumerAuthenticationInformation"]["accessToken"]
            // $result["consumerAuthenticationInformation"]["deviceDataCollectionUrl"]
            // $result["consumerAuthenticationInformation"]["referenceId"]//"ed412990-b5e7-4588-b5d8-474aecb11882"
            // return $this->render('reservacion/_3d_secure_iframe.html.twig', [
            //     'stepUpUrl' => 'https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp',
            //     'accessToken' => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNmQxM2I0Yy1kYzdmLTRjMGYtOGFmMy05MDEyZmM1YTM2MTMiLCJpYXQiOjE2Njk0ODMwNDksImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTY2OTQ4NjY0OSwiT3JnVW5pdElkIjoiNjM2YTZjNWY2OGJjZTQyMGE0NzFlMDkwIiwiUmVmZXJlbmNlSWQiOiJhNzczZGUwOC0yM2E4LTRlODItOGQ0ZC1jNGM3ODFjZWFmZWYifQ.tVpLaJz9rRmVhBRffy9zRCcmbnhPUVR147PmXtoAoF8"
            // ]);
            $cliente = $reservacion->getCliente();
            $data = [
                'clientReferenceInformation' => [
                    'code' => '1669437077298',
                ],
                'orderInformation' => [
                    'amountDetails' => [
                        'currency' => $reservacion->getMoneda(),
                        'totalAmount' => $reservacion->getPrecioVisual()
                    ],
                    'billTo' => [
                        'address1' => $cliente->getDireccion(),
                        'locality' => $cliente->getCiudad()->getName(), // USA, Canada y Mainland China.
                        'country' => $cliente->getPais()->getIso2(),
                        'firstName' => $cliente->getNombre(),
                        'lastName' => $cliente->getApellido(),
                        'email' => $cliente->getEmail(),
                    ],
                ],
                'paymentInformation' => [
                    'card' => [
                        "type" => "001",
                        "expirationMonth" => "01",
                        "expirationYear" => "2025",
                        "number" => "4456530000001096",
                    ],
                ],
                'consumerAuthenticationInformation' => [
                    'returnUrl' => 'https://transportesfuentedelnorte.com/iframe',
                    'referenceId' => '538dbbf5-4c7d-4df0-a616-ce9ee473125b'
                ],
            ];
            $result = $cybersourceApi->request('authentication_2___check_enrollment', $data);


            if ($result['status'] == CybersourceApi::PENDING_AUTHENTICATION) {
                $url = $result['consumerAuthenticationInformation']['stepUpUrl']; //https://0merchantacsstag.cardinalcommerce.com/MerchantACSWeb/creq.jsp
                $accessToken = $result['consumerAuthenticationInformation']['accessToken']; //eyJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiI3ZTM1YTQxNy0xYzM1LTQxNTctYjI4Yy1jYjg2MWNiNDdjNTUiLCJhY3NUcmFuc0lEIjoiNDhiODlmYTUtZmVkMy00YjNmLWEzN2YtYTFjYmJjYjFjODkwIiwiY2hhbGxlbmdlV2luZG93U2l6ZSI6IjAyIn0

                $window = json_decode(base64_decode($result["consumerAuthenticationInformation"]["pareq"]));
                list($height, $width) = match ($window->challengeWindowSize) {
                    '01' => [250, 400],
                    '02' => [390, 400],
                    '03' => [500, 400],
                    '04' => [600, 400],
                    default => ['100%', '100%'],
                };

                return $this->render('reservacion/_3d_secure_iframe.html.twig', [
                    'height' => $height,
                    'width' => $width,
                    'stepUpUrl' => $url,
                    'accessToken' => $accessToken
                ]);
            } else if ($result['status'] == CybersourceApi::AUTHENTICATION_FAILED) {
                $message = $result['consumerAuthenticationInformation']['cardholderMessage'];
            }

            return new JsonResponse($data);
            // }



            if (true || isset($result["consumerAuthenticationInformation"]) && isset($result["consumerAuthenticationInformation"]['accessToken'])) {
                // $referenceId = $result["consumerAuthenticationInformation"]["referenceId"];
                return $this->render('reservacion/_3d_secure_iframe.html.twig', [
                    'deviceDataCollectionUrl' => "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect", //$result["consumerAuthenticationInformation"]['deviceDataCollectionUrl'],
                    'accessToken' => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NDRlNDhhNy0zZWM2LTQ0MWItYTdlNi00NDRlOTM0MWI4MTAiLCJpYXQiOjE2Njk0MzA5MDQsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTY2OTQzNDUwNCwiT3JnVW5pdElkIjoiNjM2YTZjNWY2OGJjZTQyMGE0NzFlMDkwIiwiUmVmZXJlbmNlSWQiOiIzMmQ5NGNlYS02MTIyLTQ4MWItYmU3Ni1jNDkwMTRhNGEwNjcifQ.WVe7lZdwOSR2AEGC0ACs4tVnJXk_sd2yqmCiMK8ilVw" //$result["consumerAuthenticationInformation"]['accessToken']
                ]);
            }
        }

        die('error');

        [
            "clientReferenceInformation" => [
                "code" => "cybs_test"
            ],
            "orderInformation" => [
                "amountDetails" => [
                    "currency" => "USD",
                    "totalAmount" => "10.99"
                ],
                "billTo" => [
                    "address1" => "1 Market St",
                    "address2" => "Address 2",
                    "administrativeArea" => "CA",
                    "country" => "US",
                    "locality" => "san francisco",
                    "firstName" => "John",
                    "lastName" => "Doe",
                    "phoneNumber" => "4158880000",
                    "email" => "test@cybs.com",
                    "postalCode" => "94105"
                ]
            ],
            "paymentInformation" => [
                "card" => [
                    "type" => "001",
                    "expirationMonth" => "12",
                    "expirationYear" => "2025",
                    "number" => "4000000000000101"
                ]
            ],
            "buyerInformation" => [
                "mobilePhone" => "1245789632"
            ],
            "consumerAuthenticationInformation" => [
                "transactionMode" => "MOTO"
            ]
        ];
    }
}
