<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221009041401 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cliente_reservacion ADD apellido VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD direccion VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD localidad VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD area_administrativa VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD pais VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD codigo_postal VARCHAR(50) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion DROP asiento_numero');
        $this->addSql('ALTER TABLE cliente_reservacion DROP asiento_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE cliente_reservacion ADD asiento_numero INT NOT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD asiento_id INT NOT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion DROP apellido');
        $this->addSql('ALTER TABLE cliente_reservacion DROP direccion');
        $this->addSql('ALTER TABLE cliente_reservacion DROP localidad');
        $this->addSql('ALTER TABLE cliente_reservacion DROP area_administrativa');
        $this->addSql('ALTER TABLE cliente_reservacion DROP pais');
        $this->addSql('ALTER TABLE cliente_reservacion DROP codigo_postal');
    }
}
