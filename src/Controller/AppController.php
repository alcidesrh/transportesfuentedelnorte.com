<?php

namespace App\Controller;

use App\Entity\Contacto;
use App\Entity\Reservacion;
use App\Form\ContactoType;
use App\Repository\DepartamentoRepository;
use App\Repository\ReservacionRepository;
use App\Repository\ServicioRepository;
use App\Repository\SliderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sonata\SeoBundle\Seo\SeoPageInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    public function __construct(private SeoPageInterface $seoPage)
    {
    }

    #[Route('/', name: 'inicio')]
    public function index(Request $request, ServicioRepository $servicioRepository, SliderRepository $sliderRepository, Reservacion $reservacion = null): Response
    {
        $reservacion_paso = $reservacion ? $reservacion->getPasoCompletado() : 0;
        return $this->render('index.html.twig', [
            'reservacion_paso' => $reservacion_paso,
            'reservacion_action' => ['ruta', 'salida', 'asientos', 'pagar', 'confirmacion'][$reservacion_paso],
            'servicios' => $servicioRepository->findBy(['inicio' => true], ['prioridad' => 'ASC']),
            'slider' => $sliderRepository->findOneBy([]),
            'cybersource_session_id' => $this->getParameter('cybersource_merchant_id') . $request->getSession()->getId()
        ]);
    }

    #[Route('/servicio/{slug?}', name: 'servicio')]
    public function servicio(ServicioRepository $servicioRepository): Response
    {
        $this->seoPage->addMeta('name', 'description', '$post->getAbstract()'); //Title('Salida y destino');

        return $this->render('servicio.html.twig', [
            'servicios' => $servicioRepository->findBy([], ['prioridad' => 'ASC']) //$servicio ? [$servicio] : $servicioRepository->findBy([], ['prioridad' => 'desc']),
        ]);
    }

    #[Route('/estacion', name: 'estacion')]
    public function estacion(DepartamentoRepository $departamentoRepository): Response
    {
        return $this->render('estacion.html.twig', [
            'departamentos' => $departamentoRepository->getEstacionesDepartamento()
        ]);
    }

    #[Route('/quienes-somos', name: 'historia')]
    public function historia(): Response
    {
        return $this->render('historia.html.twig');
    }

    #[Route('/contacto', name: 'contacto')]
    public function contacto(): Response
    {
        return $this->render('contacto.html.twig');
    }

    #[Route('/contacto-form', name: 'contacto-form')]
    public function contactoForm(Request $request, EntityManagerInterface $entityManagerInterface): Response
    {

        $contacto = new Contacto();
        $form = $this->createForm(ContactoType::class, $contacto, [
            'action' => $this->generateUrl('contacto'),
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManagerInterface->persist($contacto);
            $entityManagerInterface->flush();
            $form = $this->createForm(ContactoType::class, new Contacto(), [
                'action' => $this->generateUrl('contacto'),
            ]);
            $guardado = true;
        }

        return $this->renderForm('_contacto_form.html.twig', [
            'form' => $form,
            'guardado' => isset($guardado)
        ]);
    }

    #[Route('/videos', name: 'videos')]
    public function videos(): Response
    {
        return $this->render('_videos.html.twig');
    }
}
