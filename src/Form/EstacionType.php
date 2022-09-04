<?php

namespace App\Form;

use App\Entity\Estacion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EstacionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombre')
            ->add('alias')
            ->add('direccion')
            ->add('slug')
            ->add('activa')
            ->add('createdAt')
            ->add('updatedAt')
            ->add('departamento')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Estacion::class,
        ]);
    }
}
