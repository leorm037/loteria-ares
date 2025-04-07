<?php

namespace App\Controller\Api;

use App\Repository\LoteriaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class LoteriaController extends AbstractController
{
    public function __construct(
            private LoteriaRepository $service
    )
    {

    }
    
    #[Route('/api/loterias', name: 'app_loteria_index')]
    public function index(): JsonResponse
    {
        $this->service->findAllOrderByNome();
        
        
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/LoteriaController.php',
        ]);
    }
}
