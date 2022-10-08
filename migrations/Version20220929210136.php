<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220929210136 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE asiento DROP CONSTRAINT fk_71d6d35cde734e51');
        $this->addSql('DROP INDEX idx_71d6d35cde734e51');
        $this->addSql('ALTER TABLE asiento ADD salida_reservacion_id INT NOT NULL');
        $this->addSql('ALTER TABLE asiento DROP cliente_id');
        $this->addSql('ALTER TABLE asiento ADD CONSTRAINT FK_71D6D35C4A1CAB08 FOREIGN KEY (salida_reservacion_id) REFERENCES salida_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_71D6D35C4A1CAB08 ON asiento (salida_reservacion_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE asiento DROP CONSTRAINT FK_71D6D35C4A1CAB08');
        $this->addSql('DROP INDEX IDX_71D6D35C4A1CAB08');
        $this->addSql('ALTER TABLE asiento ADD cliente_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE asiento DROP salida_reservacion_id');
        $this->addSql('ALTER TABLE asiento ADD CONSTRAINT fk_71d6d35cde734e51 FOREIGN KEY (cliente_id) REFERENCES cliente_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_71d6d35cde734e51 ON asiento (cliente_id)');
    }
}
