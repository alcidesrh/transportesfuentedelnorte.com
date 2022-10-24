<?php

namespace App\Controller\Admin;

use App\Entity\Estacion;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class EstacionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Estacion::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            'id',
            'nombre',
            'alias',
            TextField::new('direccion', 'Dirección'),
            'activa'
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // the labels used to refer to this entity in titles, buttons, etc.
            ->setEntityLabelInSingular('Estaciones')
            ->setEntityLabelInPlural('Estaciones');
    }
}
