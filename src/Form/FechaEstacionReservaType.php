<?php

namespace App\Form;

use App\Entity\Estacion;
use App\Repository\EstacionRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class FechaEstacionReservaType extends AbstractType
{
    public function __construct(private EstacionRepository $er)
    {
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // $estaciones = $this->er->getEstacionesSelect()->getQuery()->getResult();
        $builder
            // ->add('pasajeros', IntegerType::class, [
            //     'attr' => array(
            //         'placeholder' => 'Test',
            //     )
            // ])
            ->add('desde', EntityType::class, [
                'class' => Estacion::class,
                'query_builder' => $this->er->getEstacionesSelect(),
                'choice_label' => 'nombre',
                'choice_value' => function ($entity) {
                    return $entity ? $entity->getId() : '';
                },
                'group_by' => function (?Estacion $entity) {
                    return $entity->getDepartamento()->getNombre();
                },
                'placeholder' => 'Desde',
                'label' => false,
                'constraints' => [
                    new NotBlank()
                ],
                'required' => false
            ])
            ->add('hacia', EntityType::class, [
                'class' => Estacion::class,
                'query_builder' => $this->er->getEstacionesSelect(),
                'choice_label' => 'nombre',
                'choice_value' => function (?Estacion $entity) {
                    return $entity ? $entity->getId() : '';
                },
                'group_by' => function (?Estacion $entity) {
                    return $entity->getDepartamento()->getNombre();
                },
                'placeholder' => 'Hacia',
                'label' => false,
                'constraints' => [
                    new NotBlank()
                ],
                'required' => false
            ])->add(
                'ida_vuelta',
                ChoiceType::class,
                [
                    'label' => false,
                    'choices' => [
                        'Solo ida' => 1,
                        'Ida y vuelta' => 2,
                    ],
                    'expanded' => true,
                    'constraints' => [
                        new NotBlank()
                    ],
                ]
            )->add('submit', SubmitType::class, [
                'label' => 'Siguiente'
            ]);
        // ->add('fecha', TextType::class, [
        //     'label' => 'fecha de salida',
        //     'attr' => ['data-salida-formc-target' => 'fechaSalida', 'placeholder' => 'Choose an option', 'id' => 'fecha_salida', 'class' => 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',]
        // ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
