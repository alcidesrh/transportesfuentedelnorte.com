<?php

namespace App\Services;

use App\Entity\Reservacion;
use App\Repository\ReservacionRepository;
use Symfony\Component\HttpFoundation\RequestStack;

class ReservacionFactory
{
    public function __construct(private RequestStack $requestStack, private ReservacionRepository $reservacionRepository)
    {
    }

    public function __invoke(): ?Reservacion
    {
        if ($id = $this->requestStack->getCurrentRequest()->getSession()->get('reservacion')) {
            return $this->reservacionRepository->find($id);
        }
        return null;
    }
}
