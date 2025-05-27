<?php

namespace App\Form;

use App\Entity\Loteria;
use App\Entity\LoteriaPremio;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LoteriaPremioType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dezenasJogadas')
            ->add('dezenasAcertadas')
            ->add('dezenasPremiadas')
            ->add('premios')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => LoteriaPremio::class
        ]);
    }
}
