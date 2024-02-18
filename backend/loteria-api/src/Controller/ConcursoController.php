<?php

namespace App\Controller;

use App\Entity\Concurso;
use App\Repository\ConcursoRepository;
use App\Repository\LoteriaRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;
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
    #[OA\Response(
                response: 200,
                description: 'Retorna a lista de concurso cadastrados para uma loteria.',
                content: new OA\JsonContent(
                        type: 'array',
                        items: new OA\Items(
                                ref: new Model(type: Concurso::class)
                        )
                )
    )]
    #[OA\Parameter(
        name: 'loteria_id',
        in: 'query',
        description: 'Campo usado para recuperar a lista de concursos de uma loteria',
        schema: new OA\Schema(type: 'string')
    )]
    public function list(Request $request): JsonResponse
    {
        $loteriaId = $request->get('loteria_id');

        $loteria = $this->loteriaRepository->findById($loteriaId);

        $concursos = $this->concursoRepository->list($loteria);

        return $this->json($concursos);
    }
}
