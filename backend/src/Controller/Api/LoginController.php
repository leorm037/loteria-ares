<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class LoginController extends AbstractController{
    
    #[Route('/api/login', name: 'app_api_login', methods: ['POST'])]
    public function index(\Symfony\Component\Security\Http\Authentication\AuthenticationUtils $authenticationUtils): JsonResponse
    {
        $user = $this->getUser();
        
        return $this->json([
            'username' => $user->getUserIdentifier(),
            'roles' => $user->getRoles(),
        ]);
    }
}