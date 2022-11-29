<?php

namespace App\Form;

use App\Entity\ClienteReservacion;
use App\Entity\Reservacion;
use App\Form\Type\PagoDatosType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\AbstractType;
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

        $builder
            ->add('nombre', TextType::class, [
                'label' => $this->translator->trans('Nombre'),
                'constraints' => [
                    new NotBlank(['message' => $this->translator->trans('Este campo es requerido')])
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
            ->add('pago_datos', PagoDatosType::class, ['reservacion' => $options['reservacion'], 'mapped' => false, 'label' => false]);

        $builder->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) use ($options) {
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
