<?php

/*
 * This file is part of Loteria.
 *
 * (c) Leonardo Rodrigues Marques <leonardo@rodriguesmarques.com.br>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace App\Entity;

use App\Repository\LoteriaPremioRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: LoteriaPremioRepository::class)]
class LoteriaPremio extends AbstractEntity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'loteriaPremios')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank(message: 'Informe a Loteria.')]
    private ?Loteria $loteria = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: 'Informe a quantidade de dezenas jogadas.')]
    private ?int $qtdDezenasJogadas = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: 'Informe a quantidade de dezenas acertadas.')]
    private ?int $qtdDezenasAcertadas = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: 'Informe a quantidade de dezenas premiadas.')]
    private ?int $qtdDezenasPremiadas = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: 'Informe a quantidade de premios.')]
    private ?int $qtdPremios = null;

    #[ORM\Column]
    protected ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(nullable: true)]
    protected ?\DateTime $updatedAt = null;

    #[ORM\Column(type: 'uuid')]
    protected ?Uuid $uuid = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLoteria(): ?Loteria
    {
        return $this->loteria;
    }

    public function setLoteria(?Loteria $loteria): static
    {
        $this->loteria = $loteria;

        return $this;
    }

    public function getQtdDezenasJogadas(): ?int
    {
        return $this->qtdDezenasJogadas;
    }

    public function setQtdDezenasJogadas(int $qtdDezenasJogadas): static
    {
        $this->qtdDezenasJogadas = $qtdDezenasJogadas;

        return $this;
    }

    public function getQtdDezenasAcertadas(): ?int
    {
        return $this->qtdDezenasAcertadas;
    }

    public function setQtdDezenasAcertadas(int $qtdDezenasAcertadas): static
    {
        $this->qtdDezenasAcertadas = $qtdDezenasAcertadas;

        return $this;
    }

    public function getQtdDezenasPremiadas(): ?int
    {
        return $this->qtdDezenasPremiadas;
    }

    public function setQtdDezenasPremiadas(int $qtdDezenasPremiadas): static
    {
        $this->qtdDezenasPremiadas = $qtdDezenasPremiadas;

        return $this;
    }

    public function getQtdPremios(): ?int
    {
        return $this->qtdPremios;
    }

    public function setQtdPremios(int $qtdPremios): static
    {
        $this->qtdPremios = $qtdPremios;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTime $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUuid(): ?Uuid
    {
        return $this->uuid;
    }

    public function setUuid(Uuid $uuid): static
    {
        $this->uuid = $uuid;

        return $this;
    }
}
