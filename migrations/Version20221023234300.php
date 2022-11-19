<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221023234300 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE archivo_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE slider_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE archivo (id INT NOT NULL, nombre VARCHAR(255) DEFAULT NULL, extencion VARCHAR(10) DEFAULT NULL, path VARCHAR(255) DEFAULT NULL, web_p BOOLEAN DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE slider (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE slider_archivo (slider_id INT NOT NULL, archivo_id INT NOT NULL, PRIMARY KEY(slider_id, archivo_id))');
        $this->addSql('CREATE INDEX IDX_4BD2912E2CCC9638 ON slider_archivo (slider_id)');
        $this->addSql('CREATE INDEX IDX_4BD2912E46EBF93B ON slider_archivo (archivo_id)');
        $this->addSql('ALTER TABLE slider_archivo ADD CONSTRAINT FK_4BD2912E2CCC9638 FOREIGN KEY (slider_id) REFERENCES slider (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE slider_archivo ADD CONSTRAINT FK_4BD2912E46EBF93B FOREIGN KEY (archivo_id) REFERENCES archivo (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE archivo_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE slider_id_seq CASCADE');
        $this->addSql('ALTER TABLE slider_archivo DROP CONSTRAINT FK_4BD2912E2CCC9638');
        $this->addSql('ALTER TABLE slider_archivo DROP CONSTRAINT FK_4BD2912E46EBF93B');
        $this->addSql('DROP TABLE archivo');
        $this->addSql('DROP TABLE slider');
        $this->addSql('DROP TABLE slider_archivo');
    }
}
