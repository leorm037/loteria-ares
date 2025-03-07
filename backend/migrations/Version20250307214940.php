<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250307214940 extends AbstractMigration
{

    public function getDescription(): string
    {
        return 'Tabela Bolão';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(
                'CREATE TABLE `bolao` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `concurso_id` INT NOT NULL,
            `usuario_id` INT NOT NULL,
            `uuid` BINARY(16) NOT NULL,
            `nome` VARCHAR(120) NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            `cota_valor` DECIMAL(10,2) UNSIGNED NULL,
            PRIMARY KEY (`id`),
            INDEX `fk_bolao_concurso_idx` (`concurso_id` ASC),
            INDEX `fk_bolao_usuario_idx` (`usuario_id` ASC),
            FULLTEXT INDEX `fulltext_nome` (`nome`),
            CONSTRAINT `fk_bolao_concurso`
              FOREIGN KEY (`concurso_id`)
              REFERENCES `concurso` (`id`)
              ON DELETE NO ACTION
              ON UPDATE NO ACTION,
            CONSTRAINT `fk_bolao_usuario`
              FOREIGN KEY (`usuario_id`)
              REFERENCES `usuario` (`id`)
              ON DELETE NO ACTION
              ON UPDATE NO ACTION)
            ENGINE = InnoDB'
        );
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE bolao');
    }
}
