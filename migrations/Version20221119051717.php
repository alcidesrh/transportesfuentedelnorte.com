<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221119051717 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservacion ADD tarjeta_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT FK_8F062673D8720997 FOREIGN KEY (tarjeta_id) REFERENCES tarjeta (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_8F062673D8720997 ON reservacion (tarjeta_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT FK_8F062673D8720997');
        $this->addSql('DROP INDEX IDX_8F062673D8720997');
        $this->addSql('ALTER TABLE reservacion DROP tarjeta_id');
    }
}
