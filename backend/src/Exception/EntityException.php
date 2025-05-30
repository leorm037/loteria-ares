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

class EntityException extends LoteriaException
{
    public function __construct(string $message = '', array $detail = [])
    {
        parent::__construct($message, 422, null, $detail, 'Entidade não processada.');
    }
}
