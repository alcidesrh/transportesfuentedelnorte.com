<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221119002012 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cliente_reservacion ADD cuidad VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD provincia VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE cliente_reservacion ADD postalcode VARCHAR(10) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE cliente_reservacion DROP cuidad');
        $this->addSql('ALTER TABLE cliente_reservacion DROP provincia');
        $this->addSql('ALTER TABLE cliente_reservacion DROP postalcode');
    }
}
