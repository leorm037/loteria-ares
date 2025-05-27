<?php

namespace App\Repository;

use App\Entity\Loteria;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Uid\Uuid;

/**
 * @extends ServiceEntityRepository<Loteria>
 */
class LoteriaRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Loteria::class);
    }

    /**
     * 
     * @param Loteria $loteria
     * @return void
     */
    public function save(Loteria $loteria): void
    {
        $this->getEntityManager()->persist($loteria);
        $this->getEntityManager()->flush();
    }

    /**
     * 
     * @param int $pageSize
     * @param int $page
     * @return Paginator<int, Loteria>
     */
    public function list(int $pageSize = 10, int $page = 1)
    {
        $effectivePage = ($page - 1) * $pageSize;

        $query = $this->createQueryBuilder('l')
                ->orderBy('l.nome', 'ASC')
                ->setFirstResult($effectivePage)
                ->setMaxResults($pageSize)
        ;

        return new Paginator($query);
    }

    /**
     * 
     * @return Loteria[]|null
     */
    public function listOrderByNome(): ?array
    {
        return $this->createQueryBuilder('l')
                        ->orderBy('l.nome', 'ASC')
                        ->getQuery()
                        ->getResult()
        ;
    }

    /**
     * 
     * @param string $uuidString
     * @return Loteria|null
     */
    public function findByUuid(string $uuidString): ?Loteria
    {
        $uuid = Uuid::fromString($uuidString);

        return $this->createQueryBuilder('l')
                        ->where('l.uuid = :uuid')
                        ->setParameter('uuid', $uuid->toBinary())
                        ->getQuery()
                        ->getOneOrNullResult()
        ;
    }

    public function findBySlug(string $slugUrl): ?Loteria
    {
        return $this->createQueryBuilder('l')
                        ->where('l.slugUrl = :slugUrl')
                        ->setParameter('slugUrl', $slugUrl)
                        ->getQuery()
                        ->getOneOrNullResult()
        ;
    }

    //    /**
    //     * @return Loteria[] Returns an array of Loteria objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('l')
    //            ->andWhere('l.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('l.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }
    //    public function findOneBySomeField($value): ?Loteria
    //    {
    //        return $this->createQueryBuilder('l')
    //            ->andWhere('l.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
