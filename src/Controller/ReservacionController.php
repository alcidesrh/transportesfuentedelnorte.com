<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\FechaEstacionReservaType;
use App\Form\SalidaReservaType;
use Symfony\Component\HttpFoundation\Request;

class ReservacionController extends AbstractController
{
    #[Route('/ruta-form', name: '_ruta_form')]
    public function _rutaForm(Request $request): Response
    {

        try {
            $form = $this->createForm(FechaEstacionReservaType::class, null, [
                'action' => $this->generateUrl('_ruta_form')
            ]);

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $request->getSession()->set('reservacion', ['ruta' => $form->getData()]);
                return $this->redirectToRoute('_salida_form');
            }

            return $this->renderForm('reserva/_escogerRutaForm.html.twig', [
                'form' => $form,
            ]);
        } catch (\Throwable $e) {

            return $this->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    #[Route('/salida-form', name: '_salida_form')]
    public function _salidaForm(Request $request): Response
    {

        try {
            $form = $this->createForm(SalidaReservaType::class, null, [
                'action' => $this->generateUrl('_salida_form')
            ]);

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $data = $form->getData();
            }

            return $this->renderForm('reserva/_salidaForm.html.twig', [
                'form' => $form,
            ]);
        } catch (\Throwable $e) {

            return $this->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
