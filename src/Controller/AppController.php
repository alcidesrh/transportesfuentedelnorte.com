<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class AppController extends AbstractController
{
    #[Route('/', name: 'app_app')]
    public function index(Request $request): Response
    {
        return $this->renderForm('app/index.html.twig', [
            'reservacion_paso' => count($request->getSession()->get('reservacion') ?? [])
        ]);
    }
}
