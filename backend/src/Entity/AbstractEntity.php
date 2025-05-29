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

use App\Helper\DateTimeHelper;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\Uid\Uuid;

abstract class AbstractEntity
{
    #[ORM\PrePersist]
    public function prePersist(): void
    {
        $this->slugUrl();
        $this->createdAt();
        $this->generateUuid();
    }

    #[ORM\PreUpdate]
    public function preUpdate(): void
    {
        $this->slugUrl();
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

    private function slugUrl(): void
    {
        if (property_exists(static::class, 'slugUrl')) {
            $slugger = new AsciiSlugger();
            $this->slugUrl = strtolower($slugger->slug($this->getNome())); /* @phpstan-ignore method.notFound */
        }
    }
}
