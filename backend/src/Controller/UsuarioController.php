<?php

namespace App\Controller;

use App\Repository\UsuarioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class UsuarioController extends AbstractController
{

    public function __construct(
            private UsuarioRepository $repository
    )
    {
        
    }

    
}
