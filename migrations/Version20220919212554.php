<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220919212554 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT FK_8F06267326A36E51');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT FK_8F062673BA156E19');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT FK_8F06267326A36E51 FOREIGN KEY (salida_id) REFERENCES salida_reservacion (id) ON DELETE SET NULL NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT FK_8F062673BA156E19 FOREIGN KEY (regreso_id) REFERENCES salida_reservacion (id) ON DELETE SET NULL NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE salida_reservacion ALTER hora DROP NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT fk_8f06267326a36e51');
        $this->addSql('ALTER TABLE reservacion DROP CONSTRAINT fk_8f062673ba156e19');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT fk_8f06267326a36e51 FOREIGN KEY (salida_id) REFERENCES salida_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservacion ADD CONSTRAINT fk_8f062673ba156e19 FOREIGN KEY (regreso_id) REFERENCES salida_reservacion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE salida_reservacion ALTER hora SET NOT NULL');
    }
}
