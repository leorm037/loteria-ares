<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240219000918 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE concurso (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', loteria_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', numero INT NOT NULL, apuracao DATETIME DEFAULT NULL, rateio JSON DEFAULT NULL COMMENT \'(DC2Type:json)\', local VARCHAR(60) DEFAULT NULL, municipio VARCHAR(60) DEFAULT NULL, uf VARCHAR(2) DEFAULT NULL, dezenas JSON NOT NULL COMMENT \'(DC2Type:json)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, INDEX IDX_785F9DE6924D0B67 (loteria_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE loteria (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', api VARCHAR(255) NOT NULL, slug VARCHAR(120) NOT NULL, nome VARCHAR(60) NOT NULL, dezenas JSON NOT NULL COMMENT \'(DC2Type:json)\', premiar JSON NOT NULL COMMENT \'(DC2Type:json)\', marcar JSON NOT NULL COMMENT \'(DC2Type:json)\', created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, UNIQUE INDEX nome_UNIQUE (nome), UNIQUE INDEX slug_UNIQUE (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuario (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', email VARCHAR(180) NOT NULL, roles JSON NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, nome VARCHAR(60) NOT NULL, celular VARCHAR(20) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL, last_login_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_2265B05DE7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE concurso ADD CONSTRAINT FK_785F9DE6924D0B67 FOREIGN KEY (loteria_id) REFERENCES loteria (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE concurso DROP FOREIGN KEY FK_785F9DE6924D0B67');
        $this->addSql('DROP TABLE concurso');
        $this->addSql('DROP TABLE loteria');
        $this->addSql('DROP TABLE usuario');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
