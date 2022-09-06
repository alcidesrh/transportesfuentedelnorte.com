<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\RedirectResponse;

class EstablecerIdiomaSubscriber implements EventSubscriberInterface
{
    public function onKernelRequest(RequestEvent $event)
    {
        $request = $event->getRequest();

        $leanh = $request->getSession()->get('_locale');

        if (!$request->hasPreviousSession()) {

            $lang = substr( $event->getRequest()->headers->get('Accept-Language'), 0, 2);

            if($lang != 'es'){

                $request->getSession()->set('_locale', 'en');

                $response = new RedirectResponse('/en' . $request->getPathInfo());

                $event->setResponse($response);
            }
        }
        
    }

    public static function getSubscribedEvents()
    {
        return [
            // must be registered before (i.e. with a higher priority than) the default Locale listener
            KernelEvents::REQUEST => [['onKernelRequest', 20]],
        ];
    }
}
