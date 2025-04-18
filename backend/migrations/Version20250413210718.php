<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250413210718 extends AbstractMigration {

    public function getDescription(): string {
        return 'Carregar loterias na tabela Loteria';
    }

    public function up(Schema $schema): void {
        $this->addSql(
                "INSERT INTO `loteria` (`id`, `nome`, `uuid`, `api_url`, `slug_url`, `aposta`, `dezenas`, `created_at`, `updated_at`) VALUES
                    (1, 'Mega-Sena', 0x01904569087e7b66aaf699f06e120feb, 'https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena', 'mega-sena', '[6,7,8,9,10,11,12,13,14,15]', '[\"01\",\"02\",\"03\",\"04\",\"05\",\"06\",\"07\",\"08\",\"09\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",\"30\",\"31\",\"32\",\"33\",\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",\"42\",\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",\"49\",\"50\",\"51\",\"52\",\"53\",\"54\",\"55\",\"56\",\"57\",\"58\",\"59\",\"60\"]', '2024-06-23 17:03:49', NULL),
                    (2, '+Milionária', 0x019056d9c2c870fa9d61859c730b739a, 'https://servicebus2.caixa.gov.br/portaldeloterias/api/maismilionaria', 'milionaria', '[\"06\",\"07\",\"08\",\"09\",\"10\",\"11\",\"12\"]', '[\"01\",\"02\",\"03\",\"04\",\"05\",\"06\",\"07\",\"08\",\"09\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",\"30\",\"31\",\"32\",\"33\",\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",\"42\",\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",\"49\",\"50\"]', '2024-06-26 23:41:57', NULL),
                    (3, 'Quina', 0x019056d9c2c870fa9d61859c7358f5c7, 'https://servicebus2.caixa.gov.br/portaldeloterias/api/quina', 'quina', '[\"06\",\"07\",\"08\",\"09\",\"10\",\"11\",\"12\"]', '[\"01\",\"02\",\"03\",\"04\",\"05\",\"06\",\"07\",\"08\",\"09\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\"]', '2024-06-26 23:44:05', NULL),
                    (4, 'Lotofácil', 0x0190e53a58f47c009ee544b8da56fa7d, 'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil', 'lotofacil', '[15,16,17,18,19,20]', '[\"01\",\"02\",\"03\",\"04\",\"05\",\"06\",\"07\",\"08\",\"09\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\"]', '2024-08-13 14:12:01', NULL),
                    (5, 'Lotomania', 0x0191b3d81358742899018b0daabf78c8, 'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotomania', 'lotomania', '[\"00\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\"]', '[\"00\",\"01\",\"02\",\"03\",\"04\",\"05\",\"06\",\"07\",\"08\",\"09\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",\"30\",\"31\",\"32\",\"33\",\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",\"40\",\"41\",\"42\",\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",\"49\",\"50\",\"51\",\"52\",\"53\",\"54\",\"55\",\"56\",\"57\",\"58\",\"59\",\"60\",\"61\",\"62\",\"63\",\"64\",\"65\",\"66\",\"67\",\"68\",\"69\",\"70\",\"71\",\"72\",\"73\",\"74\",\"75\",\"76\",\"77\",\"78\",\"79\",\"80\",\"81\",\"82\",\"83\",\"84\",\"85\",\"86\",\"87\",\"88\",\"89\",\"90\",\"91\",\"92\",\"93\",\"94\",\"95\",\"96\",\"97\",\"98\",\"99\",\"100\"]', '2024-09-02 17:46:08', NULL);"
        );

        $this->addSql("ALTER TABLE `loteria` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6; COMMIT;");
    }

    public function down(Schema $schema): void {
        $this->addSql("DELETE FROM `loteria` WHERE `loteria`.`id` = 1;");
        $this->addSql("DELETE FROM `loteria` WHERE `loteria`.`id` = 2;");
        $this->addSql("DELETE FROM `loteria` WHERE `loteria`.`id` = 3;");
        $this->addSql("DELETE FROM `loteria` WHERE `loteria`.`id` = 4;");
        $this->addSql("DELETE FROM `loteria` WHERE `loteria`.`id` = 5;");
        
        $this->addSql("ALTER TABLE `loteria` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1; COMMIT;");
    }
}
