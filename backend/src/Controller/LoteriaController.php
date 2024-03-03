<?php

namespace App\Controller;

use App\Repository\LoteriaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class LoteriaController extends AbstractController
{
    public function __construct(private LoteriaRepository $loteriaRepository)
    {
    }

    #[Route('/api/loteria', name: 'app_api_loteria_list', methods: ['GET'])]    
    public function index(): JsonResponse
    {
        $loterias = $this->loteriaRepository->list();

        return $this->json($loterias);
    }
}
