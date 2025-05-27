<?php

namespace App\Exception;

use Override;
use Throwable;

class EntityException extends LoteriaException
{

    public function __construct(string $message = "", array $detail = [])
    {
        parent::__construct($message, 422, null, $detail, "Entidade não processada.");
    }
    
}
