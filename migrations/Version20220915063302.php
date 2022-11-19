<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220915063302 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE reservacion_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE salida_reservacion_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE reservacion (id INT NOT NULL, ruta_id INT NOT NULL, salida_id INT DEFAULT NULL, regreso_id INT DEFAULT NULL, ida_vuelta BOOLEAN DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_8F062673ABBC4845 ON reservacion (ruta_id)');
        $this->addSql('CREATE INDEX IDX_8F06267326A36E51 ON reservacion (salida_id)');
        $this->addSql('CREATE INDEX IDX_8F062673BA156E19 ON reservacion (regreso_id)');
        $this->addSql('CREATE TABLE salida_reservacion (id INT NOT NULL, salida_fecha TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, bus_clase VARCHAR(255) DEFAULT NULL, minutos INT DEFAULT NULL, salida_id BIGINT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT FK_8F062673ABBC4845 FOREIGN KEY (ruta_id) REFERENCES ruta_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT FK_8F06267326A36E51 FOREIGN KEY (salida_id) REFERENCES salida_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT FK_8F062673BA156E19 FOREIGN KEY (regreso_id) REFERENCES salida_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE ruta_reservacion ADD created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE ruta_reservacion ADD updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE ruta_reservacion DROP ida_vuelta');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE reservacion_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE salida_reservacion_id_seq CASCADE');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT FK_8F062673ABBC4845');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT FK_8F06267326A36E51');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT FK_8F062673BA156E19');
        $this->addSql('DROP TABLE reservacion');
        $this->addSql('DROP TABLE salida_reservacion');
        $this->addSql('ALTER TABLE ruta_reservacion ADD ida_vuelta BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE ruta_reservacion DROP created_at');
        $this->addSql('ALTER TABLE ruta_reservacion DROP updated_at');
    }
}
