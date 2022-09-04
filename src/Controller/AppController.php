<?php

namespace App\Controller;

use App\Form\FechaEstacionReservaType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'app_app')]
    public function index(Request $request): Response
    {
        // try {
        $form = $this->createForm(FechaEstacionReservaType::class, null, [
            'attr' => [
                'data-controller' => 'salida-form',
            ]
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
        }

        return $this->renderForm('app/index.html.twig', [
            'ruta' => $form,
        ]);
        // } 
        // catch (\Throwable $e) {

        //     return $this->json([
        //         'message' => $e->getMessage(),
        //     ]);
        // }

        // dd($result);

        return $this->render('base.html.twig',);
    }
}
