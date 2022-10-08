<?php

namespace App\Form;

use App\Entity\ClienteReservacion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class ClienteReservacionType extends AbstractType
{
    public function __construct(private TranslatorInterface $translator)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombre', TextType::class, [
                'label' => $this->translator->trans('Nombre'),
            ])
            ->add('nit', TextType::class, [
                'label' => 'Nit',
            ])

            ->add('asiento_numero')
            ->add('asiento_id')
            ->add('asiento_numero', HiddenType::class)
            ->add('asiento_id', HiddenType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ClienteReservacion::class,
        ]);
    }
}
