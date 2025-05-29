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

use App\Entity\Concurso;
use App\Entity\Loteria;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Concurso>
 */
class ConcursoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Concurso::class);
    }

    public function save(Concurso $concurso): void
    {
        $this->getEntityManager()->persist($concurso);
        $this->getEntityManager()->flush();
    }

    /**
     * @return Paginator<Concurso>
     */
    public function list(Loteria $loteria, int $pageSize = 10, int $page = 1)
    {
        $effectivePage = ($page - 1) * $pageSize;

        $query = $this->createQueryBuilder('c')
                ->where('c.loteria = :loteria')
                ->setParameter('loteria', $loteria)
                ->orderBy('c.numero', 'DESC')
                ->setFirstResult($effectivePage)
                ->setMaxResults($pageSize)
        ;

        return new Paginator($query);
    }

    public function findLastConcurso(Loteria $loteria): ?Concurso
    {
        return $this->createQueryBuilder('c')
                        ->where('c.loteria = :loteria')
                        ->setParameter('loteria', $loteria)
                        ->andWhere('c.dezenas IS NOT NULL')
                        ->orderBy('c.numero', 'DESC')
                        ->setMaxResults(1)
                        ->getQuery()
                        ->getOneOrNullResult()
        ;
    }

    //    /**
    //     * @return Concurso[] Returns an array of Concurso objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }
    //    public function findOneBySomeField($value): ?Concurso
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
