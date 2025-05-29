<?php

/*
 * This file is part of Loteria.
 *
 * (c) Leonardo Rodrigues Marques <leonardo@rodriguesmarques.com.br>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace App\Exception;

class LoteriaException extends \Exception
{
    /** @var array<int,string> */
    private array $detail;
    private string $title;

    /**
     * @param array<iny, string> $detail
     */
    public function __construct(
        string $message = '',
        int $code = 0,
        ?\Throwable $previous = null,
        array $detail = [],
        string $title = 'Erro da aplicação',
    ) {
        $this->detail = $detail;
        $this->title = $title;

        parent::__construct($message, $code, $previous);
    }

    /**
     * @return array<int,string>
     */
    public function getDetail(): array
    {
        return $this->detail;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
}
