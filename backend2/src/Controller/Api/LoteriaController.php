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
    
    #[Route('/api/teste', name: 'app_loteria_teste')]
    public function teste(): JsonResponse 
    {
        $ip = $_SERVER['REMOTE_ADDR'];
        $porta = $_SERVER['REMOTE_PORT'];
        $host = $_SERVER['HTTP_HOST'];
        
        return $this->json([
            "ip" => $ip,
            "porta" => $porta,
            "host" => $host
        ]);
    }
    
    #[Route('/api/loterias', name: 'app_loteria_index')]
    public function index(): JsonResponse
    {
        $loterias = $this->service->findAllOrderByNome();    
        
        return $this->json([
            $loterias
        ]);
    }
}
