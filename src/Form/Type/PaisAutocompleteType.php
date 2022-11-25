<?php
// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use App\Entity\Countries;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;

class PaisAutocompleteType extends AbstractType
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
            'constraints' => [
                new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
            ]
        ]);
    }


    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('pais', EntityType::class, [
            'class' => Countries::class,
            'label' => $this->translator->trans('País'),
            'autocomplete' => true,
            'choice_value' => 'id',
            'choice_label' => function (Countries $pais) {
                $nombres = $pais->getTranslations();
                if (isset($nombres[$this->translator->getLocale()])) {
                    $label = $nombres[$this->translator->getLocale()];
                } else {
                    $label = $pais->getName();
                }
                if ($emoji = $pais->getEmoji()) {
                    return $emoji . ' ' . $label;
                }
                return $label;
            },
            'preferred_choices' => $this->entityManagerInterface->getRepository(Countries::class)->createQueryBuilder("t")->setCacheable(true)->where("t.iso3 = 'GTM' or t.iso3 = 'USA'")->orderBy('t.id', $this->translator->getLocale() == 'es' ? 'asc' : 'desc')->getQuery()->getResult(),
            'placeholder' => $this->translator->trans('Seleccione país'),
            'attr' => [
                'data-action' => 'autocomplete#provincia',
                'data-controller' => 'autocomplete',
            ],
            'getter' => function (?Countries $pais, $t) {
                return $pais;
            }
        ]);
    }
}
