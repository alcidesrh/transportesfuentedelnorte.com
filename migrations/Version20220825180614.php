<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220825180614 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE departamento_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE estacion_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE departamento (id INT NOT NULL, nombre VARCHAR(80) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE estacion (id INT NOT NULL, departamento_id INT DEFAULT NULL, nombre VARCHAR(100) NOT NULL, alias VARCHAR(20) DEFAULT NULL, direccion VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_32B2395F5A91C08D ON estacion (departamento_id)');
        $this->addSql('ALTER TABLE estacion ADD CONSTRAINT FK_32B2395F5A91C08D FOREIGN KEY (departamento_id) REFERENCES departamento (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE departamento_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE estacion_id_seq CASCADE');
        $this->addSql('ALTER TABLE estacion DROP CONSTRAINT FK_32B2395F5A91C08D');
        $this->addSql('DROP TABLE departamento');
        $this->addSql('DROP TABLE estacion');
    }
}
