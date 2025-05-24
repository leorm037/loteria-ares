<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250307213209 extends AbstractMigration
{

    public function getDescription(): string
    {
        return 'Tabela Usuário';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(
            'CREATE TABLE `usuario` (
            `id` INT NOT NULL AUTO_INCREMENT,
            `nome` VARCHAR(60) NOT NULL,
            `email` VARCHAR(180) NOT NULL,
            `roles` LONGTEXT NOT NULL,
            `password` VARCHAR(255) NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`),
            UNIQUE INDEX `email_UNIQUE` (`email` ASC))
            ENGINE = InnoDB'
        );
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE usuario');
    }
}
