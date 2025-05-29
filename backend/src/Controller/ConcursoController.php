<?php

/*
 * This file is part of Loteria.
 *
 * (c) Leonardo Rodrigues Marques <leonardo@rodriguesmarques.com.br>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace App\Controller;

use App\Entity\Loteria;
use App\Repository\ConcursoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class ConcursoController extends AbstractController
{
    public function __construct(
        private ConcursoRepository $repository,
    ) {
    }

    #[Route('/api/concursos/{uuid:Loteria}', name: 'app_concursos_list', methods: ['GET'], requirements: ['uuid' => '[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}'])]
    public function list(Request $request, Loteria $loteria): JsonResponse
    {
        $pageSize = $request->get('page-size', 10);

        $page = $request->get('page', 1);

        $concursos = $this->repository->list($loteria, $pageSize, $page);

        return $this->json(['code' => 200, 'data' => $concursos], 200);
    }
}
