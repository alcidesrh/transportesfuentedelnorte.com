<?php

namespace App\Controller;

use App\Entity\Archivo;
use App\Entity\Asiento;
use App\Entity\ClienteReservacion;
use App\Entity\Configuracion;
use App\Entity\Countries;
use App\Entity\Reservacion;
use App\Entity\RutaReservacion;
use App\Entity\SalidaReservacion;
use App\Entity\States;
use App\Entity\Tarjeta;
use App\Form\RutaReservacionType;
use App\Form\SalidaReservacionType;
use App\Form\Type\CiudadAutocompleteType;
use App\Form\Type\PagoDatosType;
use App\Form\Type\PaisAutocompleteType;
use App\Form\Type\ProvinciaAutocompleteType;
use App\Repository\AsientoRepository;
use App\Services\CybersourceApi;
use App\Services\RemoteDatabaseQueries;
use App\Services\ServerSentEvent;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Dompdf\Dompdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Exception\IOException;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

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
            'reservacion' => $reservacion,
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

            $reservacion->setTransaccionId($request->getClientIp()); // quitar

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

        return $this->render('reservacion/ruta.html.twig', [
            'form' => $form,
            'primer_render' => $primer_render,
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
            'primer_render' => $primer_render,
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
                } elseif ($salida_id != $salida_reservacion->getSalidaId()) {
                    foreach ($salida_reservacion->getAsientos() as $value) {
                        $entityManagerInterface->remove($value);
                    }
                }
            } elseif ($salida_reservacion) {
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

        if ($ida_vuelta) {
            if (!$salidas = $session->get('salidas_vuelta')) {
                if ($salidas = $sistema->getSalidas($reservacion->getRuta()->getEstacionLlegada()->getId(), $reservacion->getRuta()->getEstacionSalida()->getId(), $salida_reservacion->getSalidaFecha())) {
                    if (!isset($salidas['error'])) {
                        $session->set('salidas_vuelta', $salidas);
                    }
                }
            }
        } elseif (!$salidas = $session->get('salidas')) {
            if ($salidas = $sistema->getSalidas($reservacion->getRuta()->getEstacionSalida()->getId(), $reservacion->getRuta()->getEstacionLlegada()->getId(), $salida_reservacion->getSalidaFecha())) {
                if (!isset($salidas['error'])) {
                    $session->set('salidas', $salidas);
                }
            }
        }

        if (is_null($salidas)) {
            $sistema_conexion_error = $translatorInterface->trans('No se pudo establecer la conexión con el sistema de reserva. Por favor inténtelo más tarde');
        } elseif (isset($salidas['error'])) {
            $sistema_conexion_error = $salidas['error'];
            $salidas = [];
        }

        return $this->render(
            'reservacion/salidaForm.html.twig',
            [
                'form' => $form,
                'ida_vuelta' => $ida_vuelta,
                'salida_reservacion' => $salida_reservacion,
                'salidas' => $salidas ?? null,
                'sistema_conexion_error' => $sistema_conexion_error ?? null,
                'primer_render' => $primer_render,
                'form_submitted' => $form->isSubmitted(),
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
                'data_class' => null,
            ])
        ;
        $form->get('asientos_salida')
            ->addModelTransformer(new CallbackTransformer(
                function (Collection|null $asientos = null) {
                    if ($asientos) {
                        return json_encode($asientos->map(fn (Asiento $item) => ['id' => $item->getAsientoId(), 'numero' => $item->getNumero()])->toArray());
                    }

                    return null;
                },
                function ($asientos) {
                    return json_decode($asientos);
                }
            ))
        ;

        if ($reservacion->isIdaVuelta()) {
            $form->add('asientos_regreso', TextType::class, [
                'required' => false,
                'data' => $reservacion->getRegreso()?->getAsientos(),
                'data_class' => null,
            ]);
            $form->get('asientos_regreso')
                ->addModelTransformer(new CallbackTransformer(
                    function (Collection|null $asientos = null) {
                        if ($asientos) {
                            return json_encode($asientos->map(fn (Asiento $item) => ['id' => $item->getAsientoId(), 'numero' => $item->getNumero()])->toArray());
                        }

                        return null;
                    },
                    function ($asientos) {
                        return json_decode($asientos);
                    }
                ))
            ;
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
                foreach ($data['asientos_salida'] as $value) {
                    $entityManagerInterface->persist((new Asiento())->setAsientoId($value->id)->setNumero($value->numero)->setSalidaReservacion($reservacion->getSalida()));
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
                        foreach ($data['asientos_regreso'] as $value) {
                            $entityManagerInterface->persist((new Asiento())->setAsientoId($value->id)->setNumero($value->numero)->setSalidaReservacion($reservacion->getRegreso()));
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

        return $this->render('reservacion/asiento.html.twig', [
            'reservacion' => $reservacion,
            'errors' => $errors,
            'form' => $form,
            'primer_render' => $primer_render,
        ]);
    }

    #[Route('/asiento-lista/{id}', name: 'asiento-lista')]
    public function getAsientos(SalidaReservacion $salida, RemoteDatabaseQueries $sistema, TranslatorInterface $translatorInterface, $regreso = null): Response
    {
        if ($result = $sistema->getAsientos($salida->getSalidaId())) {
            list($asientos, $senales) = $result;
            $max_h_1 = $max_h_2 = 0;
            $parseAsientos = function (SalidaReservacion $salida, $asientos, $nivel1 = true) use (&$max_h_1, &$max_h_2) {
                return array_map(function ($item) use ($salida) {
                    if ($asientos_elegidos = $salida->getAsientos()) {
                        if (in_array($item['id'], $asientos_elegidos->map(fn (Asiento $item) => $item->getAsientoId())->toArray())) {
                            $item['elegido'] = true;
                        }
                    }

                    return $item;
                }, array_filter($asientos, function ($item) use (&$max_h_1, &$max_h_2, $nivel1) {
                    if ($nivel1 && 1 == $item['clase'] && $max_h_1 < $item['coordenadaY']) {
                        $max_h_1 = $item['coordenadaY'];
                    } elseif (!$nivel1 && 2 == $item['clase'] && $max_h_2 < $item['coordenadaY']) {
                        $max_h_2 = $item['coordenadaY'];
                    }

                    return $nivel1 ? !$item['nivel2'] : $item['nivel2'];
                }));
            };
            $asientos_nivel_1 = $parseAsientos($salida, $asientos);

            $asientos_nivel_2 = $parseAsientos($salida, $asientos, false);

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
            'regreso' => $regreso,
            'max_h_1' => $max_h_2 ? $max_h_2 * 1.32 + 160 : $max_h_1 * 1.32 + 160,
            'max_h_2' => $max_h_1 * 1.32 + 160,
        ]);
    }

    #[Route('/pagar', name: 'pagar')]
    public function pagar(Reservacion $reservacion, Request $request, EntityManagerInterface $entityManagerInterface, RemoteDatabaseQueries $remoteDatabaseQueries, AsientoRepository $asientoRepository, TranslatorInterface $translatorInterface, CybersourceApi $cybersourceApi, $primer_render = null): Response
    {
        if (!$cliente = $reservacion->getCliente()) {
            $reservacion->setCliente($cliente = new ClienteReservacion());
        }

        $form = $this->createForm(PagoDatosType::class, $reservacion, [
            'action' => $this->generateUrl('pagar', ['reservacion' => $reservacion->getId()]),
            'reservacion' => $reservacion,
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //
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
            //         $this->addFlash(1124
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
                //
                // $pago_datos = $request->request->all()['cliente_reservacion']['pago_datos'];
                // $reservacion->setMoneda($pago_datos['moneda']);
                $entityManagerInterface->persist($cliente);
                $reservacion->setCliente($cliente);
                $entityManagerInterface->flush();

                if ($request->request->has('pago_datos') && $pago_datos = array_filter($request->request->all()['pago_datos'], fn ($k) => 'cliente' != $k, \ARRAY_FILTER_USE_KEY)) {
                    $request->getSession()->set('pago_datos', $pago_datos);
                }

                return $this->forward('App\Controller\ReservacionController::payerAuthenticationSetupService', ['request' => $request]);
                $request->attributes->set('_controller', 'App\Controller\ReservacionController::payerAuthenticationSetupService');

                return $this->container->get('http_kernel')->handle($request, HttpKernelInterface::MAIN_REQUEST);
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
        }

        return $this->render('reservacion/pagar.html.twig', [
            'form' => $form,
            'primer_render' => $primer_render,
            'reservacion' => $reservacion,
            'error_tarjeta' => $error_tarjeta ?? null,
            'procesand' => $entityManagerInterface->getRepository(Archivo::class)->findOneBy(['slug' => '3d-secure-2']),
        ]);
    }

    #[Route('/payer_authentication_setup_service', name: 'payer_authentication_setup_service')]
    public function payerAuthenticationSetupService(ServerSentEvent $serverSentEvent, Request $request, CybersourceApi $cybersourceApi)
    {
        if (is_array($response = $cybersourceApi->payerAuthenticationSetupService())) {
            if (isset($response['consumerAuthenticationInformation'], $response['consumerAuthenticationInformation']['referenceId'])) {
                $request->getSession()->set('referenceId', $response['consumerAuthenticationInformation']['referenceId']);

                return $serverSentEvent->procesandoPago('data_collection_iframe', [
                    'status' => $response['statuas'] ?? CybersourceApi::AUTHENTICATION_SUCCESSFUL,
                    'accessToken' => $response['consumerAuthenticationInformation']['accessToken'],
                    'deviceDataCollectionUrl' => $response['consumerAuthenticationInformation']['deviceDataCollectionUrl'],
                ], 'reservacion/_iframe_device_data_collection.stream.html.twig');
            }
        }

        return $serverSentEvent->errorPago(detalle: $response);
    }

    #[Route('/payer-authentication-check-enrollment/{session_id_challenge_response}', name: 'payer_authentication_check_enrollment')]
    public function payerAuthenticationCheckEnrollmentService(EntityManagerInterface $entityManagerInterface, ServerSentEvent $serverSentEvent, Request $request, CybersourceApi $cybersourceApi, Reservacion $reservacion = null, $session_id_challenge_response = null)
    {
        if ($session_id_challenge_response) {
            return $serverSentEvent->procesandoPago(['authentication_check_enrollment_challenge_response', $session_id_challenge_response], $request->request->all());
        }
        if (\is_array($response = $cybersourceApi->payerAuthenticationCheckEnrollmentService(
            $request->getSession()->get('referenceId'),
            $this->generateUrl('payer_authentication_check_enrollment', ['session_id_challenge_response' => $request->getSession()->getId()], UrlGeneratorInterface::ABSOLUTE_URL)
        ))) {
            if (isset($response['status'])) {
                if (CybersourceApi::PENDING_AUTHENTICATION == $response['status']) {
                    $window = json_decode(base64_decode($response['consumerAuthenticationInformation']['pareq']));
                    list($height, $width) = match ($window->challengeWindowSize) {
                        '01' => [250, 400],
                        '02' => [390, 400],
                        '03' => [500, 400],
                        '04' => [600, 400],
                        default => ['100%', '100%'],
                    };

                    $request->getSession()->set('authenticationTransactionId', $response['consumerAuthenticationInformation']['authenticationTransactionId']);

                    return $serverSentEvent->procesandoPago('authentication_check_enrollment', [
                        'height' => $height,
                        'width' => $width,
                        'stepUpUrl' => $response['consumerAuthenticationInformation']['stepUpUrl'],
                        'accessToken' => $response['consumerAuthenticationInformation']['accessToken'],
                    ], 'reservacion/_iframe_authentication_check_enrollment.stream.html.twig');
                }

                if (CybersourceApi::AUTHORIZED == $response['status'] || CybersourceApi::AUTHENTICATION_SUCCESSFUL == $response['status']) {
                    if (isset($response['id'])) {
                        $reservacion->setTransaccionId($response['id']);
                        $entityManagerInterface->flush();
                    }

                    return $this->redirectToRoute('confirmacion', ['reservacion' => $reservacion->getId()]);
                }

                return $serverSentEvent->errorPago(detalle: $response);
            }
        }

        return $serverSentEvent->errorPago(detalle: $response);
    }

    #[Route('/payer_authentication_validation_service', name: 'payer_authentication_validation_service')]
    public function payerAuthenticationValidationService(EntityManagerInterface $entityManagerInterface, ServerSentEvent $serverSentEvent, Request $request, CybersourceApi $cybersourceApi, Reservacion $reservacion = null)
    {
        if ($response = $cybersourceApi->payerAuthenticationValidationService($request->getSession()->get('authenticationTransactionId'))) {
            if (isset($response['status'])) {
                if (CybersourceApi::AUTHENTICATION_FAILED == $response['status']) {
                    return $serverSentEvent->errorPago(detalle: $response['detalle']);
                }
                if (CybersourceApi::AUTHORIZED == $response['status'] || CybersourceApi::AUTHENTICATION_SUCCESSFUL == $response['status']) {
                    if (isset($response['id'])) {
                        $reservacion->setTransaccionId($response['id']);
                        $entityManagerInterface->flush();
                    }

                    return $this->redirectToRoute('confirmacion', ['reservacion' => $reservacion->getId()]);
                }
            }
        }

        return $serverSentEvent->errorPago(detalle: $response);
    }

    #[Route('/confirmacion', name: 'confirmacion')]
    public function confirmacion(Request $request, Reservacion $reservacion, TranslatorInterface $translatorInterface, MailerInterface $mailer, Filesystem $filesystem): Response
    {
        $pdf_nombre = $translatorInterface->trans('boleto').'_'.$reservacion->getBoletoTicketId().'.pdf';

        $locale = 'es' == $request->getLocale() ? 'en' : 'es';

        $pdf_nombre_2 = $translatorInterface->trans('boleto', [], null, $locale).'_'.$reservacion->getBoletoTicketId().'.pdf';

        if (!$filesystem->exists('facturas/'.$pdf_nombre) && !$filesystem->exists('facturas/'.$pdf_nombre_2)) {
            try {
                $dompdf = new Dompdf();
                $dompdf->loadHtml($this->render('pdf/factura.html.twig', ['reservacion' => $reservacion])->getContent());
                $dompdf->render();
                $filesystem->dumpFile('facturas/'.$pdf_nombre, $dompdf->output());
            } catch (IOException $th) {
                return $this->render('reservacion/confirmacion.html.twig', [
                    'error' => 'pdf',
                    'reservacion' => $reservacion,
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
                    ->attachFromPath('facturas/'.$pdf_nombre)
                ;

                $mailer->send($email);
            }
        } else {
            $no_descargar = true;
        }

        return $this->render('reservacion/confirmacion.html.twig', [
            'reservacion' => $reservacion,
            'descargar' => (int) !isset($no_descargar),
        ]);
    }

    #[Route('/pdf/{id}', name: 'pdf')]
    public function pdf(Reservacion $reservacion, TranslatorInterface $translatorInterface): Response
    {
        $pdf_nombre = $translatorInterface->trans('boleto').'_'.$reservacion->getBoletoTicketId().'.pdf';

        $response = new Response(file_get_contents('facturas/'.$pdf_nombre));

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
            if (Reservacion::STATUS_COMPLETADA != $reservacion->getStatus()) {
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
        return $this->render('reservacion/_pais.html.twig', ['form' => $formFactoryInterface->createNamed('cliente_reservacion', PaisAutocompleteType::class, $reservacion->getCliente()?->getPais())]);
    }

    #[Route('/provincias/{pais}', name: 'provincias')]
    public function provincias(Reservacion $reservacion, ?Countries $pais = null): Response
    {
        return $this->render('reservacion/_provincias.html.twig', [
            'form' => $this->createForm(PagoDatosType::class, $reservacion, [
                'reservacion' => $reservacion,
            ])->get('cliente')->add('provincia', ProvinciaAutocompleteType::class, ['label' => false, 'pais' => $pais?->getId(), 'data' => null]),
        ]);
    }

    #[Route('/ciudad/{provincia}', name: 'ciudad')]
    public function municipios(Reservacion $reservacion, ?States $provincia = null): Response
    {
        // $reservacion->getCliente()->setProvincia($provincia);

        return $this->render('reservacion/_municipios.html.twig', [
            'form' => $this->createForm(PagoDatosType::class, $reservacion, [
                'reservacion' => $reservacion,
            ])->get('cliente')->remove('ciudad')->add('ciudad', CiudadAutocompleteType::class, ['label' => false, 'provincia' => $provincia?->getId(), 'data' => null]),
        ]);
    }
}
