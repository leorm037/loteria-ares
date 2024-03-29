<?php

namespace App\Repository;

use App\Entity\Loteria;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Uid\Uuid;

/**
 * @extends ServiceEntityRepository<Loteria>
 *
 * @method Loteria|null find($id, $lockMode = null, $lockVersion = null)
 * @method Loteria|null findOneBy(array $criteria, array $orderBy = null)
 * @method Loteria[]    findAll()
 * @method Loteria[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LoteriaRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Loteria::class);
    }

    /**
     * 
     * @return Loteria[] | mixed
     */
    public function list()
    {
        return $this->createQueryBuilder('l')
                        ->orderBy('l.nome', 'ASC')
                        ->getQuery()
                        ->getResult()
        ;
    }

    /**
     * 
     * @param string $id
     * @return Loteria | mixed
     */
    public function findById(string $id)
    {
        $uuid = Uuid::fromString($id);

        return $this->createQueryBuilder('l')
                        ->where('l.id = :id')
                        ->setParameter('id', $uuid->toBinary())
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
