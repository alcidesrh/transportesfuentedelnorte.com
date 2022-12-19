<?php

// src/Form/Type/ShippingType.php

namespace App\Form\Type;

use App\Entity\Reservacion;
use App\Entity\States;
use App\Repository\StatesRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;

class ProvinciaAutocompleteType extends AbstractType
{
    public function __construct(private TranslatorInterface $translator, private StatesRepository $statesRepository, private Reservacion $reservacion)
    {
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'pais' => null,
        ]);
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('provincia', EntityType::class, [
            'class' => States::class,
            'label' => $this->translator->trans('Departamento/Provincia'),
            'placeholder' => $this->translator->trans('Seleccione departamento'),
            'choice_label' => 'name',
            'autocomplete' => true,

            'choices' => $options['pais'] ? $this->statesRepository->createQueryBuilder('e')->setCacheable(false)->where('e.country = :country')->setParameter('country', $options['pais'])->getQuery()->getResult() : [],

            'constraints' => [
                new NotBlank(['message' => $this->translator->trans('Este campo es requerido')]),
            ],
            'attr' => [
                'data-action' => 'autocomplete#ciudad',
                'data-controller' => 'autocomplete',
            ],
            'getter' => function ($value) {
                return $value; // ?->getId();
            },

            'setter' => function (&$parent, $child): void {
                $parent = $child;
            },
        ]);
    }
}
