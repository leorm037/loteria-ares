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
use App\Entity\LoteriaPremio;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Uid\Uuid;

/**
 * @extends ServiceEntityRepository<LoteriaPremio>
 */
class LoteriaPremioRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LoteriaPremio::class);
    }

    public function save(LoteriaPremio $loteriaPremio): void
    {
        $this->getEntityManager()->persist($loteriaPremio);
        $this->getEntityManager()->flush();
    }

    /**
     * @return Paginator<LoteriaPremio>
     */
    public function list(Loteria $loteria, int $pageSize = 10, int $page = 1)
    {
        $effectivePage = ($page - 1) * $pageSize;

        $query = $this->createQueryBuilder('lp')
                ->where('lp.loteria = :loteria')
                ->setParameter('loteria', $loteria)
                ->orderBy('lp.dezenasJogadas', 'ASC')
                ->orderBy('lp.dezenasAcertadas', 'ASC')
                ->orderBy('lp.dezenasPremiadas', 'ASC')
                ->orderBy('lp.premios', 'ASC')
                ->setFirstResult($effectivePage)
                ->setMaxResults($pageSize)
        ;

        return new Paginator($query);
    }

    public function findByUuid(string $uuidString): ?LoteriaPremio
    {
        $uuid = Uuid::fromString($uuidString);

        return $this->createQueryBuilder('lp')
                        ->select('lp,l')
                        ->andWhere('lp.uuid = :uuid')
                        ->setParameter('uuid', $uuid->toBinary())
                        ->innerJoin('lp.loteria', 'l', Join::WITH, 'lp.loteria = l.id')
                        ->getQuery()
                        ->getOneOrNullResult()
        ;
    }

    public function delete(LoteriaPremio $loteriaPremio): void
    {
        $this->getEntityManager()->remove($loteriaPremio);
        $this->getEntityManager()->flush();
    }

    //    /**
    //     * @return LoteriaPremio[] Returns an array of LoteriaPremio objects
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
    //    public function findOneBySomeField($value): ?LoteriaPremio
    //    {
    //        return $this->createQueryBuilder('l')
    //            ->andWhere('l.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
