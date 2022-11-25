<?php
// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use App\Entity\Cities;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;

class CiudadAutocompleteType extends AbstractType
{
    public function __construct(private TranslatorInterface $translator, private EntityManagerInterface $entityManagerInterface)
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
            'provincia' => null,
            'constraints' => [
                new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
            ]
        ]);
    }


    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        if ($provincia = $options['provincia'] ?? $builder->getData()?->getState()) {
            $choices = $this->entityManagerInterface->getRepository(Cities::class)->createQueryBuilder('e')->setCacheable(true)->where('e.state = :state')->setParameter('state', $provincia)->getQuery()->getResult();
        }

        $builder->add('ciudad', EntityType::class, [
            'class' => Cities::class,
            'label' => $this->translator->trans('Ciudad/Municipio'),
            'placeholder' => $this->translator->trans('Seleccione localidad'),
            'choice_label' => 'name',
            'choice_value' => 'id',
            'autocomplete' => true,
            'attr' => [
                'data-controller' => 'autocomplete'
            ],
            ...isset($choices) ? ['choices' => $choices] : ['choices' => [], 'disabled' => true],
            'getter' => function (?Cities $cities, $t) {
                return $cities;
            }
        ]);
    }
}
