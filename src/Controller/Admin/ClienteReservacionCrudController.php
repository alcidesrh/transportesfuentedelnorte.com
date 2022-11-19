<?php

namespace App\Controller\Admin;

use App\Entity\ClienteReservacion;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ClienteReservacionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ClienteReservacion::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            'id',
            TextField::new('nombreCompleto', 'Ruta'),
            'email',
            'telefono',
            TextField::new('direccion', 'Dirección'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // the labels used to refer to this entity in titles, buttons, etc.
            ->setEntityLabelInSingular('Clientes')
            ->setEntityLabelInPlural('Clientes');
    }
}
