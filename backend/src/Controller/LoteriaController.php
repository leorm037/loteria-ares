<?php

namespace App\Controller;

use App\Entity\Loteria;
use App\Repository\LoteriaRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class LoteriaController extends AbstractController
{
    public function __construct(private LoteriaRepository $loteriaRepository)
    {
    }

    #[Route('/api/loteria', name: 'app_api_loteria_list', methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: 'Retorna a lista de loterias cadastradas.',
        content: new OA\JsonContent(
                type: 'array',
                items: new OA\Items(
                        ref: new Model(type: Loteria::class),
                )
        )
)]
    public function index(): JsonResponse
    {
        $loterias = $this->loteriaRepository->list();

        return $this->json($loterias);
    }
}
