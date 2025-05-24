<?php

namespace App\Entity;

use App\Repository\LoteriaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: LoteriaRepository::class)]
#[ORM\UniqueConstraint(name: 'nome_UNIQUE', columns: ['nome'])]
#[ORM\UniqueConstraint(name: 'uuid_UNIQUE', columns: ['uuid'])]
#[ORM\UniqueConstraint(name: 'slug_UNIQUE', columns: ['slug_url'])]
#[ORM\HasLifecycleCallbacks]
class Loteria extends AbstractEntity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 60)]
    #[Assert\NotBlank(message: 'Informe o nome da loteria.')]
    private ?string $nome = null;

    #[ORM\Column(type: 'uuid')]
    protected ?Uuid $uuid = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'Informe a URL de acesso a API.')]
    protected ?string $api_url = null;

    #[ORM\Column(length: 255)]
    private ?string $slug_url = null;

    /** @var array<int> $aposta */
    #[ORM\Column]
    private array $aposta = [];

    /** @var array<int> $dezenas */
    #[ORM\Column]
    private array $dezenas = [];

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    protected ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    protected ?\DateTimeInterface $updatedAt = null;

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
        return $this->api_url;
    }

    public function setApiUrl(string $api_url): static
    {
        $this->api_url = $api_url;

        return $this;
    }

    public function getSlugUrl(): ?string
    {
        return $this->slug_url;
    }

    public function setSlugUrl(string $slug_url): static
    {
        $this->slug_url = $slug_url;

        return $this;
    }

    public function getAposta(): array
    {
        return $this->aposta;
    }

    public function setAposta(array $aposta): static
    {
        $this->aposta = $aposta;

        return $this;
    }

    public function getDezenas(): array
    {
        return $this->dezenas;
    }

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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
