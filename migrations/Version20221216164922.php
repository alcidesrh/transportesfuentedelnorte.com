<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221216164922 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cliente_reservacion DROP localidad');
        $this->addSql('ALTER TABLE cliente_reservacion DROP area_administrativa');
        $this->addSql('ALTER TABLE cliente_reservacion DROP postalcode');
        $this->addSql('ALTER TABLE reservacion ADD status_cybersources VARCHAR(50) DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ALTER moneda TYPE VARCHAR(255)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE cliente_reservacion ADD localidad VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD area_administrativa VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD postalcode VARCHAR(10) DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion DROP status_cybersources');
        $this->addSql('ALTER TABLE reservacion ALTER moneda TYPE VARCHAR(5)');
    }
}
