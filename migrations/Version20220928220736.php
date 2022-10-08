<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220928220736 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE asiento_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE cliente_reservacion_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE asiento (id INT NOT NULL, cliente_id INT DEFAULT NULL, numero SMALLINT NOT NULL, asiento_id INT NOT NULL, precio DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_71D6D35CDE734E51 ON asiento (cliente_id)');
        $this->addSql('CREATE TABLE cliente_reservacion (id INT NOT NULL, nit VARCHAR(25) DEFAULT NULL, nombre VARCHAR(255) NOT NULL, asiento_numero INT NOT NULL, asiento_id INT NOT NULL, email VARCHAR(100) DEFAULT NULL, telefono VARCHAR(20) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE asiento ADD CONSTRAINT FK_71D6D35CDE734E51 FOREIGN KEY (cliente_id) REFERENCES cliente_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservacion ADD cliente_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD created_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT FK_8F062673DE734E51 FOREIGN KEY (cliente_id) REFERENCES cliente_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8F062673DE734E51 ON reservacion (cliente_id)');
        $this->addSql('UPDATE reservacion SET created_at = NOW(), updated_at = NOW()');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT FK_8F062673DE734E51');
        $this->addSql('DROP SEQUENCE asiento_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE cliente_reservacion_id_seq CASCADE');
        $this->addSql('ALTER TABLE asiento DROP CONSTRAINT FK_71D6D35CDE734E51');
        $this->addSql('DROP TABLE asiento');
        $this->addSql('DROP TABLE cliente_reservacion');
        $this->addSql('DROP INDEX UNIQ_8F062673DE734E51');
        $this->addSql('ALTER TABLE reservacion DROP cliente_id');
        $this->addSql('ALTER TABLE reservacion DROP created_at');
        $this->addSql('ALTER TABLE reservacion DROP updated_at');
    }
}
