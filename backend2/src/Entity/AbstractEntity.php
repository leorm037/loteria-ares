<?php

namespace App\Entity;

use App\Helper\DateTimeHelper;
use Symfony\Component\Uid\Uuid;
use Doctrine\ORM\Mapping as ORM;

abstract class AbstractEntity
{

    #[ORM\PrePersist]
    public function prePersist(): void
    {
        $this->createdAt();
        $this->generateUuid();
    }

    #[ORM\PreUpdate]
    public function preUpdate(): void
    {
        $this->updateAt();
    }

    private function createdAt(): void
    {
        if (property_exists(static::class, 'createdAt') && null === $this->createdAt) {
            $this->createdAt = DateTimeHelper::currentDateTimeImmutable();
        }
    }

    private function updateAt(): void
    {
        if (property_exists(static::class, 'updatedAt')) {
            $this->updatedAt = DateTimeHelper::currentDateTime();
        }
    }

    private function generateUuid(): void
    {
        if (property_exists(static::class, 'uuid') && null === $this->uuid) {
            $this->uuid = Uuid::v4();
        }
    }
}
