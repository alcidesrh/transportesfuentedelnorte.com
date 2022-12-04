<?php

namespace App\EventSubscriber;

use App\Entity\Reservacion;
use App\Services\RemoteDatabaseQueries;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class SessionReservacionSubscriber implements EventSubscriberInterface
{
    public function __construct(private $reservacion_minutos, private UrlGeneratorInterface $router, private EntityManagerInterface $entityManagerInterface, private RemoteDatabaseQueries $remoteDatabaseQueries)
    {
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        if ($event->isMainRequest() && $session = $event->getRequest()->getSession()) {
            if ($reservacion_id = $session->get('reservacion')) {
                $now = new \DateTime();
                $date = date_timestamp_set(new \DateTime(), $session->getMetadataBag()->getCreated());

                $difference = date_diff($now, $date);

                $minutes = $difference->days * 24 * 60;
                $minutes += $difference->h * 60;
                $minutes += $difference->i;

                if ($minutes > $this->reservacion_minutos) {
                    $reservacion = $this->entityManagerInterface->find(Reservacion::class, $reservacion_id);

                    if (Reservacion::STATUS_COMPLETADA != $reservacion->getStatus()) {
                        if ($reservacion->getBoletoTicketId()) {
                            $this->remoteDatabaseQueries->anularReservacion($reservacion);
                            $this->entityManagerInterface->flush();
                        }
                    }

                    $session->getFlashBag()->add(
                        'session_terminada',
                        'session_terminada_mensaje'
                    );
                    $session->getFlashBag()->add(
                        'RESERVACION_MINUTOS',
                        $this->reservacion_minutos
                    );

                    $session->clear();

                    if ($event->getRequest()->headers->has('turbo-request')) {
                        $response = new Response(null, 200, [
                            'Turbo-Location' => $this->router->generate('inicio'),
                            'session-terminada' => true,
                        ]);
                    } else {
                        $response = new RedirectResponse($this->router->generate('inicio'));
                    }

                    $event->setResponse($response);
                }
            }
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => [
                ['onKernelRequest', 127],
            ],
        ];
    }
}
