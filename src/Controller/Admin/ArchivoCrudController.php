<?php

namespace App\Controller\Admin;

use App\Entity\Archivo;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\FileUploadType;
use Symfony\Component\Form\FormInterface;
use function Symfony\Component\String\u;

class ArchivoCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Archivo::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [

            ImageField::new('path')
                ->setBasePath('images')
                ->setUploadDir('public/images')
                ->setUploadedFileNamePattern('[slug]-[timestamp].[extension]'),
            IdField::new('id')->onlyOnIndex(),
            TextField::new('nombre')->hideWhenCreating(),
            TextField::new('extencion', 'Extención')->hideWhenCreating(),
            BooleanField::new('webP', 'Crear versión webp')->onlyWhenCreating(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // the labels used to refer to this entity in titles, buttons, etc.
            ->setEntityLabelInSingular('Imagen')
            ->setEntityLabelInPlural('Imágenes');
    }

    protected function processUploadedFiles(FormInterface $form): void
    {
        /** @var FormInterface $child */
        foreach ($form as $child) {
            $config = $child->getConfig();

            if (!$config->getType()->getInnerType() instanceof FileUploadType) {
                if ($config->getCompound()) {
                    $this->processUploadedFiles($child);
                }

                continue;
            }

            /** @var FileUploadState $state */
            $state = $config->getAttribute('state');

            if (!$state->isModified()) {
                continue;
            }

            $uploadDelete = $config->getOption('upload_delete');

            if ($state->hasCurrentFiles() && ($state->isDelete() || (!$state->isAddAllowed() && $state->hasUploadedFiles()))) {
                foreach ($state->getCurrentFiles() as $file) {
                    $uploadDelete($file);
                }
                $state->setCurrentFiles([]);
            }

            $filePaths = (array) $child->getData();
            $uploadDir = $config->getOption('upload_dir');
            $uploadNew = $config->getOption('upload_new');


            $entity = $form->getData();
            foreach ($state->getUploadedFiles() as $index => $file) {
                $entity->setNombre($file->getClientOriginalName())->setExtencion($file->getClientOriginalExtension())->setTipo(Archivo::IMAGEN);
                $fileName = u($filePaths[$index])->replace($uploadDir, '')->toString();
                $uploadNew($file, $uploadDir, $fileName);
            }
        }
    }
}
