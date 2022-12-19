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
        if ($event->isMainRequest() && !$request->hasPreviousSession() && ($preferredLanguage = $request->getPreferredLanguage($this->enabled_locales)) != $request->attributes->get('_locale') && 'payer_authentication_check_enrollment' != $request->attributes->get('_route')) {
            $request->setLocale($preferredLanguage);
            $request->attributes->set('_vary_by_language', true);
            $this->router->getContext()->setParameter('_locale', $request->getLocale());
            $request->getSession()->set('_locale', $request->getLocale());

            $response = new RedirectResponse($this->router->generate('inicio'));

            $event->setResponse($response);
        } else {
            if ($locale = $request->attributes->get('_locale')) {
                $request->getSession()->set('_locale', $locale);
            } else {
                $request->setLocale($request->getSession()->get('_locale', 'es'));
            }
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
