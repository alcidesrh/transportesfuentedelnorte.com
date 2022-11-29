<?php
// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use App\Entity\States;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;

class ProvinciaAutocompleteType extends AbstractType
{
    public function __construct(private TranslatorInterface $translator, private EntityManagerInterface $entityManagerInterface, private RequestStack $requestStack)
    {
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => null,
            'choice_value' => 'id',
            'choice_label' => 'name',
            'autocomplete' => true,
            'choices' => [],
            'pais' => null,
            'constraints' => [
                new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
            ]
        ]);
    }


    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        if ($pais = $options['pais'] ?? $builder->getData()?->getCountry()) {
            $query_builder = ['query_builder' => $this->entityManagerInterface->getRepository(States::class)->createQueryBuilder('e')->where('e.country = :country')->setParameter('country', $pais)];
        }

        $builder->add('provincia', EntityType::class, [
            'class' => States::class,
            'label' => $this->translator->trans('Departamento/Provincia'),
            'placeholder' => $this->translator->trans('Seleccione departamento'),
            'choice_label' => 'name',
            'choice_value' => 'id',
            'autocomplete' => true,
            'preferred_choices' => $this->entityManagerInterface->getRepository(States::class)->createQueryBuilder("t")->where("t.id = 1")->getQuery()->getResult(),
            'attr' => [
                'data-action' => 'autocomplete#ciudad',
                'data-controller' => 'autocomplete'
            ],
            ...isset($query_builder) ? $query_builder
                : ['choices' => [], 'disabled' => true],
            'getter' => function (?States $states, $t) {
                return $states;
            },

        ]);
    }
}
