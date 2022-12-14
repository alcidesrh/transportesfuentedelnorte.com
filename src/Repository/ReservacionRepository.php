<?php

namespace App\Repository;

use App\Entity\Reservacion;
use DateInterval;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Reservacion>
 *
 * @method Reservacion|null find($id, $lockMode = null, $lockVersion = null)
 * @method Reservacion|null findOneBy(array $criteria, array $orderBy = null)
 * @method Reservacion[]    findAll()
 * @method Reservacion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservacionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Reservacion::class);
    }

    public function add(Reservacion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Reservacion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Reservacion[] Returns an array of Reservacion objects
    //     */
    public function getReservacionVencidas(int $minutos): array
    {
        $date = (new DateTime())->sub(new DateInterval("PT{$minutos}M"));
        return $this->createQueryBuilder('r')
            ->andWhere('r.status = :statu_incompleta or r.status is null or r.status = :status_error')
            ->andWhere('r.createdAt < :date')
            ->setParameter('statu_incompleta', Reservacion::STATUS_INCOMPLETA)
            ->setParameter('status_error', Reservacion::STATUS_ANULADA_ERROR)
            ->setParameter('date', $date)
            ->getQuery()
            ->getResult();
    }

    //    public function findOneBySomeField($value): ?Reservacion
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
