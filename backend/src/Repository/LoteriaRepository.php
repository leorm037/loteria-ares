<?php

/*
 * This file is part of Loteria.
 *
 * (c) Leonardo Rodrigues Marques <leonardo@rodriguesmarques.com.br>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

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

    public function save(Loteria $loteria): void
    {
        $this->getEntityManager()->persist($loteria);
        $this->getEntityManager()->flush();
    }

    /**
     * @return Paginator<Loteria>
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
