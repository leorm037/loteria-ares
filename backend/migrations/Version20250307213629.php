<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250307213629 extends AbstractMigration
{

    public function getDescription(): string
    {
        return 'Tabela Loteria';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(
            'CREATE TABLE `loteria` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `nome` VARCHAR(60) NOT NULL,
            `uuid` BINARY(16) NOT NULL,
            `api_url` VARCHAR(255) NOT NULL,
            `slug_url` VARCHAR(255) NOT NULL,
            `aposta` JSON NOT NULL,
            `dezenas` JSON NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
            UNIQUE INDEX `slug_url_UNIQUE` (`slug_url` ASC),
            UNIQUE INDEX `uuid_UNIQUE` (`uuid` ASC),
            PRIMARY KEY (`id`))
            ENGINE = InnoDB'
        );
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE loteria');
    }
}
