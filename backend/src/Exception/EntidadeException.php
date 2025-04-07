<?php

namespace App\Exception;

use Override;
use Throwable;

class EntidadeException extends LoteriaException
{

    public function __construct(string $message = "", ?Throwable $previous = null, array $detail = [])
    {
        parent::__construct($message, 422, $previous, $detail, "Entidade não processada.");
    }
    
}
