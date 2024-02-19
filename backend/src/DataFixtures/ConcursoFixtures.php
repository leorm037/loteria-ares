<?php

namespace App\DataFixtures;

use App\Entity\Concurso;
use App\Repository\LoteriaRepository;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ConcursoFixtures extends Fixture implements DependentFixtureInterface
{

    private LoteriaRepository $loteriaRepository;

    public function __construct(LoteriaRepository $loteriaRepository)
    {
        $this->loteriaRepository = $loteriaRepository;
    }

    public function load(ObjectManager $manager): void
    {
        $megaSena = $this->loteriaRepository->findOneBy(['nome' => 'Mega-Sena']);

        $concursos = [
            [
                'numero' => 1234,
                'loteria' => $megaSena,
                'dezenas' => [1, 2, 3, 4, 5, 6],
                'local' => 'Sorteio da Sorte',
                'municipio' => 'São Paulo',
                'uf' => 'SP'
            ],
            [
                'numero' => 1235,
                'loteria' => $megaSena,
                'dezenas' => [11, 22, 33, 44, 55, 60],
                'local' => 'Sorteio da Sorte',
                'municipio' => 'São Paulo',
                'uf' => 'SP'
            ],
            [
                'numero' => 1236,
                'loteria' => $megaSena,
                'dezenas' => [12, 23, 34, 45, 56, 59],
                'local' => 'Sorteio da Sorte',
                'municipio' => 'São Paulo',
                'uf' => 'SP'
            ]
        ];

        foreach ($concursos as $item) {
            $concurso = new Concurso();

            $concurso
                    ->setNumero($item['numero'])
                    ->setLoteria($item['loteria'])
                    ->setLocal($item['local'])
                    ->setMunicipio($item['municipio'])
                    ->setUf($item['uf'])
                    ->setDezenas($item['dezenas'])
                    ->setApuracao(new DateTime())
            ;

            $manager->persist($concurso);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            LoteriaFixtures::class
        ];
    }
}
