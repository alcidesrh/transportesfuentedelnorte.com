<?php

namespace App\Form;

use App\Entity\ClienteReservacion;
use App\Entity\Reservacion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

class ClienteReservacionType extends AbstractType
{
    public function __construct(private TranslatorInterface $translator, private Environment $twig)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
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
                'help' => '* obligatorio',
            ])
            ->add('apellido', TextType::class, [
                'label' => $this->translator->trans('Apellido'),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'help' => '* obligatorio',
            ])
            ->add('telefono', TextType::class, [
                'label' => 'Teléfono',
                'required' => false,
            ])
            ->add('email', TextType::class, [
                'label' => 'Email',
                'required' => false,
                'help_html' => true,
                'help' => $this->twig->render('reservacion/_reserva_email_nota.html.twig')
            ])
            ->add('nit', TextType::class, [
                'label' => 'Nit (solo Guatemala)',
                'required' => false,
                'help_attr' => ['class' => 'help-info']
            ])
            //Datos de la tarjeta
            ->add('precio', TextType::class, [
                'label' => $this->translator->trans('Cantidad a pagar'),
                'mapped' => false,
                'disabled' => true,
                'data' => number_format($options['reservacion']->getPrecioVisual(), 2, ".", ","),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'attr' => ['data-pagar-target' => 'precio']
            ])
            ->add('tipo_moneda', ChoiceType::class, [
                'mapped' => false,
                'choices'  => [
                    Reservacion::MONEDA_GTQ => Reservacion::MONEDA_GTQ,
                    Reservacion::MONEDA_USD => Reservacion::MONEDA_USD,
                ],
                'expanded' => true,
                'multiple' => false,
                'data' => $options['reservacion']->getMoneda(),
                'choice_attr' => [
                    Reservacion::MONEDA_GTQ => ['data-action' => 'click->pagar#moneda', 'data-precio' => number_format($options['reservacion']->getPrecio(), 2, ".", ",")],
                    Reservacion::MONEDA_USD => ['data-action' => 'click->pagar#moneda', 'data-precio' => number_format($options['reservacion']->getPrecioDolar(), 2, ".", ",")],
                ],
            ])
            ->add('numero', TextType::class, [
                'label' => $this->translator->trans('Número de la tarjeta'),
                'mapped' => false,
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'help' => '* obligatorio',
            ])
            ->add('expira_mes', ChoiceType::class, [
                'label' => $this->translator->trans('Mes que expira'),
                'mapped' => false,
                'choices'  => ['01' => 1, '02' => 2, '03' => 3, '04' => 4, '05' => 5, '06' => 6, '07' => 7, '08' => 8, '09' => 9, '10' => 10, '11' => 11, '12' => 12],
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'help' => '* obligatorio',
            ])
            ->add('expira_year', ChoiceType::class, [
                'label' => $this->translator->trans('Año que expira'),
                'mapped' => false,
                'choices'  => $años,
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'help' => '* obligatorio',
            ])
            ->add('codigo_seguridad', TextType::class, [
                'label' => 'CSC/CVV',
                'mapped' => false,
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
                ],
                'help' => '* obligatorio',
            ])
            ->add('submit', SubmitType::class, [
                'label' => $this->translator->trans('Pagar'),
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ClienteReservacion::class,
            'reservacion' => null
        ]);
    }
}
