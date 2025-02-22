CREATE SCHEMA IF NOT EXISTS `loteria` DEFAULT CHARACTER SET utf8 ;
USE `loteria` ;

CREATE TABLE IF NOT EXISTS `loteria`.`loteria` (
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
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`loteria_premio_receber` (
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
    REFERENCES `loteria`.`loteria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`concurso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `loteria_id` INT NOT NULL,
  `numero` INT NOT NULL,
  `apuracao` DATE NULL,
  `municipio` VARCHAR(60) NULL,
  `local` VARCHAR(60) NULL,
  `uf` VARCHAR(2) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `uuid` BINARY(16) NOT NULL,
  `rateio_premio` JSON NULL,
  `dezenas` JSON NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_concurso_loteria_idx` (`loteria_id` ASC),
  CONSTRAINT `fk_concurso_loteria`
    FOREIGN KEY (`loteria_id`)
    REFERENCES `loteria`.`loteria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `email` VARCHAR(180) NOT NULL,
  `ip` LONGTEXT NULL,
  `roles` LONGTEXT NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `last_access` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`bolao` (
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
    REFERENCES `loteria`.`concurso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bolao_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `loteria`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`apostador` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bolao_id` INT NOT NULL,
  `uuid` BINARY(16) NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `email` VARCHAR(180) NULL,
  `cota_paga` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
  `cota_quantidade` INT(4) UNSIGNED NOT NULL DEFAULT 1,
  `cota_valor` DECIMAL(12,2) UNSIGNED NULL,
  `pix` VARCHAR(180) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_apostador_bolao_idx` (`bolao_id` ASC),
  CONSTRAINT `fk_apostador_bolao`
    FOREIGN KEY (`bolao_id`)
    REFERENCES `loteria`.`bolao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`aposta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bolao_id` INT NOT NULL,
  `uuid` BINARY(16) NOT NULL,
  `dezenas` JSON NOT NULL,
  `conferida` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `quantidade_acertos` INT NULL,
  `loteria_premio_receber_id` INT NULL,
  `valor` DECIMAL(12,2) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aposta_bolao_idx` (`bolao_id` ASC),
  INDEX `fk_aposta_loteria_premio_receber_idx` (`loteria_premio_receber_id` ASC),
  CONSTRAINT `fk_aposta_bolao`
    FOREIGN KEY (`bolao_id`)
    REFERENCES `loteria`.`bolao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aposta_loteria_premio_receber`
    FOREIGN KEY (`loteria_premio_receber_id`)
    REFERENCES `loteria`.`loteria_premio_receber` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`arquivo_tipo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `categoria` VARCHAR(60) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`arquivo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `arquivo_tipo_id` INT NOT NULL,
  `uuid` BINARY(16) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `nome_original` VARCHAR(255) NOT NULL,
  `caminho` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_arquivo_usuario1_idx` (`usuario_id` ASC),
  INDEX `fk_arquivo_arquivo_tipo_idx` (`arquivo_tipo_id` ASC),
  CONSTRAINT `fk_arquivo_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `loteria`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_arquivo_arquivo_tipo`
    FOREIGN KEY (`arquivo_tipo_id`)
    REFERENCES `loteria`.`arquivo_tipo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`bolao_arquivo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `arquivo_id` INT NOT NULL,
  `bolao_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bolao_arquivo_arquivo_idx` (`arquivo_id` ASC),
  INDEX `fk_bolao_arquivo_bolao_idx` (`bolao_id` ASC),
  CONSTRAINT `fk_bolao_arquivo_arquivo`
    FOREIGN KEY (`arquivo_id`)
    REFERENCES `loteria`.`arquivo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bolao_arquivo_bolao`
    FOREIGN KEY (`bolao_id`)
    REFERENCES `loteria`.`bolao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `loteria`.`apostador_arquivo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `arquivo_id` INT NOT NULL,
  `apostador_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bolao_apostador_arquivo_idx` (`arquivo_id` ASC),
  INDEX `fk_bolao_apostador_apostador_idx` (`apostador_id` ASC),
  CONSTRAINT `fk_bolao_apostador_arquivo`
    FOREIGN KEY (`arquivo_id`)
    REFERENCES `loteria`.`arquivo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bolao_apostador_apostador`
    FOREIGN KEY (`apostador_id`)
    REFERENCES `loteria`.`apostador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;