<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class UsuarioController extends AbstractController{
        
    #[Route('/api/usuarios', name: 'app_api_usuario_save', methods: ['POST'])]
    public function save(): JsonResponse {
        return $this->json([
            'message' => 'POST',
            'path' => 'src/Controller/Api/UsuarioController.php',
        ]);
    }
    
    #[Route('/api/usuarios', name: 'app_api_usuario_get', methods: ['GET'])]
    public function getUsuario(): JsonResponse
    {
        return $this->json([
            'message' => 'USUARIO',
            'path' => 'src/Controller/Api/UsuarioController.php',
        ]);
    }
    
    #[Route('/api/usuarios', name: 'app_api_usuario_update', methods: ['PATCH'])]
    public function update(): JsonResponse {
        return $this->json([
            'message' => 'UPDATE',
            'path' => 'src/Controller/Api/UsuarioController.php',
        ]);
    }
    
}
