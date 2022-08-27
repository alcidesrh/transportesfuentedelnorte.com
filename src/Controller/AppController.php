<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'app_app')]
    public function index(): Response
    {
        try {
        } catch (\Throwable $e) {

            return $this->json([
                'message' => $e->getMessage(),
            ]);
        }

        // dd($result);

        return $this->render('base.html.twig');
    }
}
