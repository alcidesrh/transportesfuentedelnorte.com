<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221119042658 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE tarjeta_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE tarjeta (id INT NOT NULL, imagen_id INT DEFAULT NULL, nombre VARCHAR(255) NOT NULL, codigo VARCHAR(10) DEFAULT NULL, prioridad SMALLINT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AE90B786763C8AA7 ON tarjeta (imagen_id)');
        $this->addSql('ALTER TABLE tarjeta ADD CONSTRAINT FK_AE90B786763C8AA7 FOREIGN KEY (imagen_id) REFERENCES archivo (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE tarjeta_id_seq CASCADE');
        $this->addSql('ALTER TABLE tarjeta DROP CONSTRAINT FK_AE90B786763C8AA7');
        $this->addSql('DROP TABLE tarjeta');
    }
}
