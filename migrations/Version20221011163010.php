<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221011163010 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservacion ADD precio DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD transaccion_id VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD status VARCHAR(20) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE reservacion DROP precio');
        $this->addSql('ALTER TABLE reservacion DROP transaccion_id');
        $this->addSql('ALTER TABLE reservacion DROP status');
    }
}
