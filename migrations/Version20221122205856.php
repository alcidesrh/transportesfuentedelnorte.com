<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221122205856 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cliente_reservacion ADD pais_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD provincia_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD ciudad_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD CONSTRAINT FK_5D97BD85C604D5C6 FOREIGN KEY (pais_id) REFERENCES countries (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE cliente_reservacion ADD CONSTRAINT FK_5D97BD854E7121AF FOREIGN KEY (provincia_id) REFERENCES states (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE cliente_reservacion ADD CONSTRAINT FK_5D97BD85E8608214 FOREIGN KEY (ciudad_id) REFERENCES cities (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_5D97BD85C604D5C6 ON cliente_reservacion (pais_id)');
        $this->addSql('CREATE INDEX IDX_5D97BD854E7121AF ON cliente_reservacion (provincia_id)');
        $this->addSql('CREATE INDEX IDX_5D97BD85E8608214 ON cliente_reservacion (ciudad_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE cliente_reservacion DROP CONSTRAINT FK_5D97BD85C604D5C6');
        $this->addSql('ALTER TABLE cliente_reservacion DROP CONSTRAINT FK_5D97BD854E7121AF');
        $this->addSql('ALTER TABLE cliente_reservacion DROP CONSTRAINT FK_5D97BD85E8608214');
        $this->addSql('DROP INDEX IDX_5D97BD85C604D5C6');
        $this->addSql('DROP INDEX IDX_5D97BD854E7121AF');
        $this->addSql('DROP INDEX IDX_5D97BD85E8608214');
        $this->addSql('ALTER TABLE cliente_reservacion DROP pais_id');
        $this->addSql('ALTER TABLE cliente_reservacion DROP provincia_id');
        $this->addSql('ALTER TABLE cliente_reservacion DROP ciudad_id');
    }
}
