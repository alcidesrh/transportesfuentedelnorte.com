<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\EventSubscriber;

use App\Entity\Reservacion;
use App\Services\RemoteDatabaseQueries;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Container\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\EventListener\AbstractSessionListener;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Service\ServiceSubscriberInterface;

/**
 * Sets the session in the request.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 *
 * @final
 */
class SessionListener extends AbstractSessionListener implements ServiceSubscriberInterface
{

    public function __construct(private $RESERVACION_MINUTOS, private UrlGeneratorInterface $router, private EntityManagerInterface $entityManagerInterface, private RemoteDatabaseQueries $remoteDatabaseQueries, ContainerInterface $container, private bool $debug, private array $sessionOptions)
    {
        parent::__construct($container, $this->debug, $sessionOptions);
    }

    public function onKernelRequest(RequestEvent $event)
    {
        if (!$event->isMainRequest()) {
            return;
        }

        $request = $event->getRequest();

        if (!$request->hasSession()) {
            // This variable prevents calling `$this->getSession()` twice in case the Request (and the below factory) is cloned
            $sess = null;
            $request->setSessionFactory(function () use (&$sess, $request) {
                if (!$sess) {
                    $sess = $this->getSession();

                    /*
                     * For supporting sessions in php runtime with runners like roadrunner or swoole, the session
                     * cookie needs to be read from the cookie bag and set on the session storage.
                     *
                     * Do not set it when a native php session is active.
                     */
                    if ($sess && !$sess->isStarted() && \PHP_SESSION_ACTIVE !== session_status()) {
                        $sessionId = $sess->getId() ?: $request->cookies->get($sess->getName(), '');
                        $sess->setId($sessionId);
                    }
                }

                return $sess;
            });

            if ($session = $request->getSession()) {

                if ($reservacion_id = $session->get('reservacion')) {

                    $now = new DateTime();
                    $date = date_timestamp_set(new DateTime(), $session->getMetadataBag()->getCreated());

                    if (date_diff($now, $date)->i > $this->RESERVACION_MINUTOS) {

                        $reservacion = $this->entityManagerInterface->find(Reservacion::class, $reservacion_id);

                        if ($reservacion->getStatus() != Reservacion::STATUS_COMPLETADA) {

                            if ($reservacion->getBoletoTicketId()) {
                                $result = $this->remoteDatabaseQueries->anularReservacion($reservacion);
                                if (isset($result['anulado'])) {
                                    $reservacion->setStatus(Reservacion::STATUS_ANULADA);
                                    $this->entityManagerInterface->flush();
                                }
                            }
                        }


                        $session->getFlashBag()->add(
                            'session_terminada',
                            'session_terminada_mensaje'
                        );
                        $session->getFlashBag()->add(
                            'RESERVACION_MINUTOS',
                            $this->RESERVACION_MINUTOS
                        );

                        $session->replace([]);

                        $response = new Response(null, 200, [
                            'Turbo-Location' => $this->router->generate('inicio'),
                            'session-terminada' => true,
                        ]);
                        $event->setResponse($response);
                    }
                }
            }
        }
    }


    public static function getSubscribedServices(): array
    {
        return [
            "session_factory",
            "session_collector",
            "logger"
        ];
    }

    protected function getSession(): ?SessionInterface
    {
        if ($this->container->has('session_factory')) {
            return $this->container->get('session_factory')->createSession();
        }

        return null;
    }
}
