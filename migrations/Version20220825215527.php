<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220825215527 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE departamento ADD slug VARCHAR(110) NOT NULL');
        $this->addSql('ALTER TABLE departamento ADD created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE departamento ADD updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_40E497EB989D9B62 ON departamento (slug)');
        $this->addSql('ALTER TABLE estacion ADD slug VARCHAR(110) NOT NULL');
        $this->addSql('ALTER TABLE estacion ADD created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE estacion ADD updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_32B2395F989D9B62 ON estacion (slug)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP INDEX UNIQ_40E497EB989D9B62');
        $this->addSql('ALTER TABLE departamento DROP slug');
        $this->addSql('ALTER TABLE departamento DROP created_at');
        $this->addSql('ALTER TABLE departamento DROP updated_at');
        $this->addSql('DROP INDEX UNIQ_32B2395F989D9B62');
        $this->addSql('ALTER TABLE estacion DROP slug');
        $this->addSql('ALTER TABLE estacion DROP created_at');
        $this->addSql('ALTER TABLE estacion DROP updated_at');
    }
}
