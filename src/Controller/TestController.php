<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\ORM\EntityManagerInterface;

class TestController extends AbstractController
{
    #[Route('/', name: 'app_test')]
    public function index(EntityManagerInterface $systemfdnEntityManager): JsonResponse
    {
        try {
            $rsm = new ResultSetMapping();
            $rsm->addScalarResult('id', 'id');
            $rsm->addScalarResult('fecha_creacion', 'fecha_creacion');
            // build rsm here

            $query = $systemfdnEntityManager->createNativeQuery("SELECT * FROM encomienda WHERE encomienda.id = '1007611'", $rsm)->getResult();
            // $query->setParameter(1, 'romanb');
            // var_dump(count($query));
        } catch (\Throwable $e) {

            $e = 0;
        }

        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/TestController.php',
        ]);
    }
}
