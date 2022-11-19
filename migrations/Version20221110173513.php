<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221110173513 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE configuracion_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE configuracion (id INT NOT NULL, compra_porciento DOUBLE PRECISION DEFAULT NULL, dolar_cambio DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('INSERT INTO configuracion (id, compra_porciento, dolar_cambio) VALUES (1, 5, 7.65)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE configuracion_id_seq CASCADE');
        $this->addSql('DROP TABLE configuracion');
    }
}
