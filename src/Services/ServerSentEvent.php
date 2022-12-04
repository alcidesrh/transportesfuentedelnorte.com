<?php

namespace App\Services;

use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Twig\Environment;

class ServerSentEvent
{
    public function __construct(private HubInterface $hubInterface, private RequestStack $requestStack, private Environment $environment)
    {
    }

    public function errorPago($mensaje = 'Ha habido un error inesperado. Por favor inténtelo de nuevo.', $detalle = null)
    {
        $this->hubInterface->publish(new Update(
            'error_pago_'.$this->requestStack->getSession()->getId(),
            $this->environment->render('reservacion/_error_pago.stream.html.twig', ['error' => $mensaje, 'detalle' => $detalle])
        ));

        return new Response(null, Response::HTTP_FORBIDDEN, [
            'error-pago' => true,
        ]);
    }

    public function publish(string|array $topic, array|string $param, ?string $view = null)
    {
        $this->hubInterface->publish(new Update(
            is_array($topic) ? $topic[0].'_'.$topic[1]
                : $topic.'_'.$this->requestStack->getSession()->getId(),
            $view ? $this->environment->render($view, $param)
                : (is_array($param) ? json_encode($param) : $param)
        ));
    }

    public function procesandoPago(...$arguments)
    {
        $this->publish(...$arguments);

        return new Response(null, Response::HTTP_NO_CONTENT, [
            'procesando-pago' => true,
        ]);
    }
}
