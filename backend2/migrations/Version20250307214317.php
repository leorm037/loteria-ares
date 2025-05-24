<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250307214317 extends AbstractMigration
{

    public function getDescription(): string
    {
        return 'Tabela Concurso';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(
            'CREATE TABLE `concurso` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `loteria_id` INT NOT NULL,
            `numero` INT NOT NULL,
            `apuracao` DATE NULL,
            `municipio` VARCHAR(60) NULL,
            `local` VARCHAR(60) NULL,
            `uf` VARCHAR(2) NULL,
            `uuid` BINARY(16) NOT NULL,
            `rateio_premio` JSON NULL,
            `dezenas` JSON NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`),
            INDEX `fk_concurso_loteria_idx` (`loteria_id` ASC),
            CONSTRAINT `fk_concurso_loteria`
              FOREIGN KEY (`loteria_id`)
              REFERENCES `loteria` (`id`)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
            ENGINE = InnoDB'
        );
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE concurso');
    }
}
