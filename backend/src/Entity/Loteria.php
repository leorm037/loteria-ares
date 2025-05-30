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

use App\Repository\LoteriaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;
use Symfony\Component\Serializer\Attribute\MaxDepth;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: LoteriaRepository::class)]
class Loteria extends AbstractEntity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['list'])]
    private ?int $id = null;

    #[ORM\Column(length: 60)]
    #[Assert\NotBlank(message: 'Informe o nome da Loteria.')]
    #[Groups(['list'])]
    private ?string $nome = null;

    #[ORM\Column(type: 'uuid')]
    #[Groups(['list'])]
    protected ?Uuid $uuid = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'Informe a url da API da Loteria.')]
    #[Groups(['list'])]
    private ?string $apiUrl = null;

    #[ORM\Column(length: 255)]
    #[Groups(['list'])]
    protected ?string $slugUrl = null;

    /** @var array<int,int> $apostas */
    #[ORM\Column]
    #[Assert\NotBlank(message: 'Informe a quantidade de dezenas permitidas para apostar.')]
    #[Groups(['list'])]
    private array $apostas = [];

    /** @var array<int,int> $dezenas */
    #[ORM\Column]
    #[Assert\NotBlank(message: 'Informe as dezenas que podem ser apostadas.')]
    #[Groups(['list'])]
    private array $dezenas = [];

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    #[Groups(['list'])]
    protected ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['list'])]
    protected ?\DateTime $updatedAt = null;

    /**
     * @var Collection<int, LoteriaPremio>
     */
    #[ORM\OneToMany(targetEntity: LoteriaPremio::class, mappedBy: 'loteria', orphanRemoval: true)]
    #[ MaxDepth(1)]
    private Collection $loteriaPremios;

    /**
     * @var Collection<int, Concurso>
     */
    #[ORM\OneToMany(targetEntity: Concurso::class, mappedBy: 'loteria', orphanRemoval: true)]
    #[ MaxDepth(1)]
    private Collection $concursos;

    public function __construct()
    {
        $this->dezenasJogadas = new ArrayCollection();
        $this->loteriaPremios = new ArrayCollection();
        $this->concursos = new ArrayCollection();
    }

    public function getSlugUrl(): ?string
    {
        return $this->slugUrl;
    }

    public function setSlugUrl(?string $slugUrl): void
    {
        $this->slugUrl = $slugUrl;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(string $nome): static
    {
        $this->nome = $nome;

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

    public function getApiUrl(): ?string
    {
        return $this->apiUrl;
    }

    public function setApiUrl(string $apiUrl): static
    {
        $this->apiUrl = $apiUrl;

        return $this;
    }

    /**
     * @return array<int,int>
     */
    public function getApostas(): array
    {
        return $this->apostas;
    }

    /**
     * @param array<int,int> $apostas
     */
    public function setApostas(array $apostas): static
    {
        $this->apostas = $apostas;

        return $this;
    }

    /**
     * @return array<int,int>
     */
    public function getDezenas(): array
    {
        return $this->dezenas;
    }

    /**
     * @param array<int,int> $dezenas
     */
    public function setDezenas(array $dezenas): static
    {
        $this->dezenas = $dezenas;

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

    /**
     * @return Collection<int, LoteriaPremio>
     */
    public function getLoteriaPremios(): Collection
    {
        return $this->loteriaPremios;
    }

    public function addLoteriaPremio(LoteriaPremio $loteriaPremio): static
    {
        if (!$this->loteriaPremios->contains($loteriaPremio)) {
            $this->loteriaPremios->add($loteriaPremio);
            $loteriaPremio->setLoteria($this);
        }

        return $this;
    }

    public function removeLoteriaPremio(LoteriaPremio $loteriaPremio): static
    {
        if ($this->loteriaPremios->removeElement($loteriaPremio)) {
            // set the owning side to null (unless already changed)
            if ($loteriaPremio->getLoteria() === $this) {
                $loteriaPremio->setLoteria(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Concurso>
     */
    public function getConcursos(): Collection
    {
        return $this->concursos;
    }

    public function addConcurso(Concurso $concurso): static
    {
        if (!$this->concursos->contains($concurso)) {
            $this->concursos->add($concurso);
            $concurso->setLoteria($this);
        }

        return $this;
    }

    public function removeConcurso(Concurso $concurso): static
    {
        if ($this->concursos->removeElement($concurso)) {
            // set the owning side to null (unless already changed)
            if ($concurso->getLoteria() === $this) {
                $concurso->setLoteria(null);
            }
        }

        return $this;
    }
}
