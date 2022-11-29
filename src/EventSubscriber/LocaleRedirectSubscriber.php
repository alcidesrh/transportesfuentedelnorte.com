<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class LocaleRedirectSubscriber implements EventSubscriberInterface
{
    public function __construct(private UrlGeneratorInterface $router, private $enabled_locales)
    {
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();
        if ($event->isMainRequest() && !$request->hasPreviousSession() && ($preferredLanguage = $request->getPreferredLanguage($this->enabled_locales)) != $request->attributes->get('_locale') && $request->attributes->get('_route') != "payer_authentication_check_enrollment") {

            $request->setLocale($preferredLanguage);
            $request->attributes->set('_vary_by_language', true);
            $this->router->getContext()->setParameter('_locale', $request->getLocale());

            $response = new RedirectResponse($this->router->generate('inicio'));

            $event->setResponse($response);
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => [
                ['onKernelRequest', 15],
            ],
        ];
    }
}
