<?php

namespace App\Services;

use App\Entity\Reservacion;
use App\Entity\User;
use App\Repository\ReservacionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ArgumentValueResolverInterface;
use Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadata;
use Symfony\Component\Security\Core\Security;

class ReservacionValueResolver implements ArgumentValueResolverInterface
{

    public function __construct(private ReservacionRepository $reservacionRepository)
    {
    }

    public function supports(Request $request, ArgumentMetadata $argument): bool
    {
        if (Reservacion::class !== $argument->getType()) {
            return false;
        }
        return true;
    }

    public function resolve(Request $request, ArgumentMetadata $argument): iterable
    {
        yield false; //$this->reservacionRepository->find($request->getSession()->get('reservacion', 0));
    }
}
