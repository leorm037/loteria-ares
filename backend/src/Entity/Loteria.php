<?php

namespace App\Entity;

use App\Repository\LoteriaRepository;
use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: LoteriaRepository::class)]
#[ORM\UniqueConstraint(name: 'nome_UNIQUE', columns: ['nome'])]
#[ORM\UniqueConstraint(name: 'slug_UNIQUE', columns: ['slug'])]
#[ORM\HasLifecycleCallbacks]
class Loteria extends AbstractEntity
{

    #[ORM\Id]
    #[ORM\Column(type: 'uuid', unique: true)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    private ?Uuid $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'É obrigatório informar a url da api.')]
    private ?string $api = null;

    #[ORM\Column(length: 120)]
    protected ?string $slug = null;

    #[ORM\Column(length: 60)]
    #[Assert\NotBlank(message: 'É obrigatório informar o nome da loteria.')]
    private ?string $nome = null;

    /**
     * 
     * @var array<int>
     */
    #[ORM\Column]
    #[Assert\NotBlank(message: 'É obrigatório informar as dezenas que podem ser marcadas.')]
    private array $dezenas = [];

    /**
     * 
     * @var array<int>
     */
    #[ORM\Column]
    #[Assert\NotBlank(message: 'É obrigatório informar a quantidade de dezenas que podem ser premiadas.')]
    private array $premiar = [];

    /**
     * 
     * @var array<int>
     */
    #[ORM\Column]
    #[Assert\NotBlank(message: 'É obrigatório informar a quantidade de dezenas que podem ser marcadas.')]
    private array $marcar = [];

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    protected ?DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    protected ?DateTimeInterface $updatedAt = null;

    #[ORM\Column(options: ['default' => true])]
    private ?bool $isActive = true;

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function getApi(): ?string
    {
        return $this->api;
    }

    public function setApi(?string $api): static
    {
        $this->api = $api;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
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

    public function getDezenas(): array
    {
        return $this->dezenas;
    }

    public function setDezenas(array $dezenas): static
    {
        $this->dezenas = $dezenas;

        return $this;
    }

    public function getPremiar(): array
    {
        return $this->premiar;
    }

    public function setPremiar(array $premiar): static
    {
        $this->premiar = $premiar;

        return $this;
    }

    public function getMarcar(): array
    {
        return $this->marcar;
    }

    public function setMarcar(array $marcar): static
    {
        $this->marcar = $marcar;

        return $this;
    }

    public function getCreatedAt(): ?DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): static
    {
        $this->isActive = $isActive;

        return $this;
    }
}
