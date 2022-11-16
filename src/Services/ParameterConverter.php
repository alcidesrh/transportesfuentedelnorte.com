<?php

namespace App\Services;

use App\Entity\Reservacion;
use App\Repository\ReservacionRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ParameterConverter implements ParamConverterInterface
{

    public function __construct(private ReservacionRepository $reservacionRepository)
    {
    }


    function apply(Request $request, ParamConverter $configuration)
    {

        if ($id = $request->getSession()->get('reservacion')) {
            $request->attributes->set($configuration->getName(), $this->reservacionRepository->find($id));
        } else {
            $request->attributes->set($configuration->getName(), null);
        }
    }

    function supports(ParamConverter $configuration)
    {
        return $configuration->getName() == 'reservacion';
    }
}
