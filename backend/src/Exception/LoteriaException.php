<?php

namespace App\Exception;

use Exception;
use Throwable;

class LoteriaException extends Exception
{

    private readonly array $detail;
    private readonly string $title;

    public function __construct(
            string $message = "",
            int $code = 0,
            ?Throwable $previous = null,
            array $detail = [],
            string $title = "Erro da aplicação"
    )
    {
        $this->detail = $detail;
        $this->title = $title;

        parent::__construct($message, $code, $previous);
    }

    public function getDetail(): array
    {
        return $this->detail;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
    
}
