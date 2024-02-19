<?php

namespace App\DataFixtures;

use App\Entity\Loteria;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class LoteriaFixtures extends Fixture
{

    public function load(ObjectManager $manager): void
    {
        $loterias = [
            [
                'nome' => "Mega-Sena",
                'api' => "https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena",
                'dezenas' => range(1,60,1),
                'marcar' => range(6,20,1),
                'premiar' => range(4,6),
                'isActive' => true
            ],
            [
                'nome' => "+Milionária",
                'api' => "https://servicebus2.caixa.gov.br/portaldeloterias/api/milionaria",
                'dezenas' => range(1,50),
                'marcar' => range(6,15),
                'premiar' => range(2,6),
                'isActive' => true
            ]
        ];

        foreach ($loterias as $item) {
            $loteria = new Loteria();

            $loteria
                    ->setNome($item['nome'])
                    ->setApi($item['api'])
                    ->setDezenas($item['dezenas'])
                    ->setMarcar($item['marcar'])
                    ->setPremiar($item['premiar'])
                    ->setIsActive($item['isActive'])
            ;

            $manager->persist($loteria);
        }

        $manager->flush();
    }
}
