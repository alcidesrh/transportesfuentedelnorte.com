<?php

namespace App\Controller\Admin;

use App\Entity\Reservacion;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;

class ReservacionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Reservacion::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            DateTimeField::new('createdAt', 'Creada'),
            'status',
            TextField::new('rutaForAdmin', 'Ruta'),
            'precio',
            'transaccion_id',
            'factura_dte',
            'moneda',
            'paso_completado',
            'ida_vuelta'

        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // the labels used to refer to this entity in titles, buttons, etc.
            ->setEntityLabelInSingular('Reservaciones')
            ->setEntityLabelInPlural('Reservaciones');
    }
}
