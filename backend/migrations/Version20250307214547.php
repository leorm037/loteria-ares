<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250307214547 extends AbstractMigration
{

    public function getDescription(): string
    {
        return 'Tabela Loteria Premio Receber';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(
                'CREATE TABLE `loteria_premio_receber` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `loteria_id` INT NOT NULL,
            `qtd_dezenas_jodas` INT UNSIGNED NOT NULL,
            `qtd_dezenas_acertadas` INT UNSIGNED NOT NULL,
            `qtd_dezenas_premiadas` INT UNSIGNED NULL,
            `qtd_premios` INT UNSIGNED NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`),
            INDEX `fk_loteria_premio_receber_loteria_idx` (`loteria_id` ASC),
            CONSTRAINT `fk_loteria_premio_receber_loteria`
              FOREIGN KEY (`loteria_id`)
              REFERENCES `loteria` (`id`)
              ON DELETE NO ACTION
              ON UPDATE NO ACTION)
            ENGINE = InnoDB'
        );
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE loteria_premio_receber');
    }
}
