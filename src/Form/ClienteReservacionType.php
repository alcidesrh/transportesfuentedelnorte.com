<?php

namespace App\Form;

use App\Entity\ClienteReservacion;
use App\Entity\Reservacion;
use App\Entity\Tarjeta;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

class ClienteReservacionType extends AbstractType
{
    public function __construct(private RequestStack $requestStack, private EntityManagerInterface $entityManagerInterface, private TranslatorInterface $translator, private Environment $twig)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        if ($reservacion = $options['reservacion']) {
            if (!$reservacion->getMoneda() && $moneda = $this->requestStack->getCurrentRequest()->getLocale() == 'es' ? Reservacion::MONEDA_GTQ : Reservacion::MONEDA_USD) {
                $options['reservacion'] = $reservacion->setMoneda($moneda);
            }
        }

        $años = [];
        for ($i = intval(date("Y")); $i < intval(date("Y")) + 20; $i++) {
            $años[$i] = $i;
        }
        $builder
            ->add('nombre', TextType::class, [
                'label' => $this->translator->trans('Nombre'),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'attr' => [
                    'autocomplete' => 'off'
                ]

            ])
            ->add('apellido', TextType::class, [
                'label' => $this->translator->trans('Apellido'),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ])
            ->add('telefono', TextType::class, [
                'label' => 'Teléfono',
                'required' => false,
            ])
            ->add('email', TextType::class, [
                'label' => 'Email',
            ])
            ->add('nit', TextType::class, [
                'label' => 'Nit (solo Guatemala)',
                'required' => false,
                'help_attr' => ['class' => 'help-info']
            ])
            ->add('direccion', TextType::class, [
                'label' => $this->translator->trans('Dirección'),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
            ])
            ->add('codigo_postal', TextType::class, [
                'label' => $this->translator->trans('Código postal'),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
            ])
            //Datos de la tarjeta
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
            ->add('tarjetas', ChoiceType::class, [
                'mapped' => false,
                'choices' => $this->entityManagerInterface->getRepository(Tarjeta::class)->createQueryBuilder("t")->where('t.activo = :true')->orderBy('t.prioridad', 'desc')->setParameter('true', true)->getQuery()->getResult(),
                'expanded' => true,
                'multiple' => false,
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
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ])
            ->add('expira_mes', ChoiceType::class, [
                'label' => $this->translator->trans('Mes que expira'),
                'mapped' => false,
                'choices'  => ['01' => 1, '02' => 2, '03' => 3, '04' => 4, '05' => 5, '06' => 6, '07' => 7, '08' => 8, '09' => 9, '10' => 10, '11' => 11, '12' => 12],
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ])
            ->add('expira_year', ChoiceType::class, [
                'label' => $this->translator->trans('Año que expira'),
                'mapped' => false,
                'choices'  => $años,
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ])
            ->add('codigo_seguridad', TextType::class, [
                'label' => 'CSC/CVV',
                'mapped' => false,
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],

            ]);

        $builder->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) {
            $form = $event->getForm();
            $form->add('pais');
            $form->add('provincia');
            $form->add('ciudad');
        });

        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
            $form = $event->getForm();
            $form->remove('pais');
            $form->remove('provincia');
            $form->remove('ciudad');
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ClienteReservacion::class,
            'reservacion' => null,
            'allow_extra_fields' => true
        ]);
    }
}
