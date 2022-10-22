<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221019174626 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservacion ADD factura_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD factura_dte VARCHAR(50) DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion ADD boleto_ticket_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE salida_reservacion DROP factura_id');
        $this->addSql('ALTER TABLE salida_reservacion DROP factura_dte');
        $this->addSql('ALTER TABLE salida_reservacion DROP boleto_ticket_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE salida_reservacion ADD factura_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE salida_reservacion ADD factura_dte VARCHAR(50) DEFAULT NULL');
        $this->addSql('ALTER TABLE salida_reservacion ADD boleto_ticket_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reservacion DROP factura_id');
        $this->addSql('ALTER TABLE reservacion DROP factura_dte');
        $this->addSql('ALTER TABLE reservacion DROP boleto_ticket_id');
    }
}
