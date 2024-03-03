<?php

namespace App\Controller;

use App\Repository\ConcursoRepository;
use App\Repository\LoteriaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class ConcursoController extends AbstractController
{

    public function __construct(
            private LoteriaRepository $loteriaRepository,
            private ConcursoRepository $concursoRepository
    )
    {
        
    }

    #[Route('/api/concurso', name: 'app_api_concurso_list', methods: ['GET'])]
    public function list(Request $request): JsonResponse
    {
        $loteriaId = $request->get('loteria_id');

        $loteria = $this->loteriaRepository->findById($loteriaId);

        $concursos = $this->concursoRepository->list($loteria);

        return $this->json($concursos);
    }
}
