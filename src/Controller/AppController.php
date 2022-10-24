<?php

namespace App\Controller;

use App\Repository\ReservacionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'inicio')]
    public function index(Request $request, ReservacionRepository $reservacionRepository): Response
    {
        $paso = 0;
        if ($reservacion_id = $request->getSession()->get('reservacion')) {
            $paso = $reservacionRepository->find($reservacion_id)->getPasoCompletado();
        }
        return $this->render('index.html.twig', [
            'reservacion_paso' => $paso,
            'reservacion_id' => $request->getSession()->get('reservacion')
        ]);
    }
}
