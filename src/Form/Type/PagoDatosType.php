<?php
// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use App\Entity\Reservacion;
use App\Entity\Tarjeta;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;

class PagoDatosType extends AbstractType
{
    public function __construct(private TranslatorInterface $translator, private EntityManagerInterface $entityManagerInterface)
    {
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'reservacion' => null,
        ]);
    }


    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $años = [];
        for ($i = intval(date("Y")); $i < intval(date("Y")) + 20; $i++) {
            $años[$i] = $i;
        }

        $builder
            ->add('precio', TextType::class, [
                'label' => $this->translator->trans('Total a pagar'),
                'mapped' => false,
                'disabled' => true,
                'data' => number_format($options['reservacion']->getPrecioVisual(), 2, ".", ","),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'attr' => ['data-pagar-target' => 'precio']
            ])
            ->add('tarjeta', EntityType::class, [
                'mapped' => false,
                'class' => Tarjeta::class,
                'choices' => $this->entityManagerInterface->getRepository(Tarjeta::class)->createQueryBuilder("t")->where('t.activo = :true')->orderBy('t.prioridad', 'desc')->setParameter('true', true)->getQuery()->getResult(),
                'expanded' => true,
                'multiple' => false,
                'choice_label' => 'name',
                'choice_value' => 'id',
                'data' => $options['reservacion']->getTarjeta(),
                'label' => $this->translator->trans('Tipo de tarjeta'),
                'choice_label' => 'nombre',
            ])
            ->add('tipo_moneda', ChoiceType::class, [
                'mapped' => false,
                'choices'  => $this->translator->getLocale() == 'es' ? [
                    Reservacion::MONEDA_GTQ => Reservacion::MONEDA_GTQ,
                    Reservacion::MONEDA_USD => Reservacion::MONEDA_USD,
                ] : [
                    Reservacion::MONEDA_USD => Reservacion::MONEDA_USD,
                    Reservacion::MONEDA_GTQ => Reservacion::MONEDA_GTQ,
                ],
                'expanded' => true,
                'multiple' => false,
                'data' => $options['reservacion']->getMoneda(),
                'choice_attr' => $this->translator->getLocale() == 'es' ?  [
                    Reservacion::MONEDA_GTQ => ['data-action' => 'click->pagar#moneda', 'data-precio' => number_format($options['reservacion']->getPrecio(), 2, ".", ",")],
                    Reservacion::MONEDA_USD => ['data-action' => 'click->pagar#moneda', 'data-precio' => number_format($options['reservacion']->getPrecioDolar(), 2, ".", ",")],
                ] : [
                    Reservacion::MONEDA_USD => ['data-action' => 'click->pagar#moneda', 'data-precio' => number_format($options['reservacion']->getPrecioDolar(), 2, ".", ",")],
                    Reservacion::MONEDA_GTQ => ['data-action' => 'click->pagar#moneda', 'data-precio' => number_format($options['reservacion']->getPrecio(), 2, ".", ",")],
                ],
            ])
            ->add('numero', TextType::class, [
                'label' => $this->translator->trans('Número de la tarjeta'),
                'mapped' => false,
                'data' => '4456530000001096',
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ])
            ->add('expira_mes', ChoiceType::class, [
                'label' => $this->translator->trans('Mes que expira'),
                'mapped' => false,
                'choices'  => ['01' => '01', '02' => '02', '03' => '03', '04' => '04', '05' => '05', '06' => '06', '07' => '07', '08' => '08', '09' => '09', '10' => '10', '11' => '11', '12' => '12'],
                'data' => '01',
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ])
            ->add('expira_year', ChoiceType::class, [
                'label' => $this->translator->trans('Año que expira'),
                'mapped' => false,
                'choices'  => $años,
                'data' => '2025',
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
            ])

            ->add('codigo_seguridad', TextType::class, [
                'label' => 'CSC/CVV',
                'mapped' => false,
                'data' => '1234',
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ]);
    }
}
