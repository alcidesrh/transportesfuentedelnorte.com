<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220915050706 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE ruta_reservacion_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE ruta_reservacion (id INT NOT NULL, estacion_salida_id INT NOT NULL, estacion_llegada_id INT NOT NULL, ida_vuelta BOOLEAN DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_B6ED46FA9D01A1 ON ruta_reservacion (estacion_salida_id)');
        $this->addSql('CREATE INDEX IDX_B6ED46F4C0D6FC9 ON ruta_reservacion (estacion_llegada_id)');
        $this->addSql('ALTER TABLE ruta_reservacion ADD CONSTRAINT FK_B6ED46FA9D01A1 FOREIGN KEY (estacion_salida_id) REFERENCES estacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE ruta_reservacion ADD CONSTRAINT FK_B6ED46F4C0D6FC9 FOREIGN KEY (estacion_llegada_id) REFERENCES estacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE ruta_reservacion_id_seq CASCADE');
        $this->addSql('ALTER TABLE ruta_reservacion DROP CONSTRAINT FK_B6ED46FA9D01A1');
        $this->addSql('ALTER TABLE ruta_reservacion DROP CONSTRAINT FK_B6ED46F4C0D6FC9');
        $this->addSql('DROP TABLE ruta_reservacion');
    }
}
