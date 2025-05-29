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
use App\Entity\LoteriaPremio;
use App\Exception\EntityException;
use App\Exception\LoteriaException;
use App\Form\LoteriaPremioType;
use App\Repository\LoteriaPremioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class LoteriaPremioController extends AbstractController
{
    public function __construct(
        private LoteriaPremioRepository $repository,
    ) {
    }

    #[Route('/api/loteria/{uuid:Loteria}/premio', name: 'app_loteria_premio_list', methods: ['GET'])]
    public function list(Request $request, Loteria $loteria): JsonResponse
    {
        $pageSize = $request->get('page-size', 10);

        $page = $request->get('page', 1);

        $loteriaPremios = $this->repository->list($loteria, $pageSize, $page);

        return $this->json(['code' => 200, 'data' => $loteriaPremios], 200);
    }

    #[Route('/api/loteria/{uuid:Loteria}/premio', name: 'app_loteria_premio_list', methods: ['POST'])]
    public function new(Request $request, Loteria $loteria): JsonResponse
    {
        $loteriaPremio = new LoteriaPremio();
        $loteriaPremio->setLoteria($loteria);

        $type = $this->createForm(LoteriaPremioType::class, $loteriaPremio);

        $data = json_decode($request->getContent(), true);

        $type->submit($data);

        if (!$type->isValid()) {
            $errorMessages = [];

            $errors = $type->getErrors(true);

            /** @var FormError $error */
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            throw new EntityException('Informe os campos obrigatórios', $errorMessages);
        }

        try {
            $this->repository->save($loteriaPremio);
        } catch (\Exception $e) {
            throw new LoteriaException($e->getMessage(), $e->getCode(), $e);
        }

        $message = 'A loteria prémio foi salva com sucesso.';

        return $this->json(['code' => 201, 'message' => $message], 201);
    }

    #[Route('/api/loteria/premio/{uuid:LoteriaPremio}', name: 'app_loteria_premio_list', methods: ['PUT'])]
    public function update(Request $request, LoteriaPremio $loteriaPremio): JsonResponse
    {
        $type = $this->createForm(LoteriaPremioType::class, $loteriaPremio);

        $data = json_decode($request->getContent(), true);

        $type->submit($data);

        if (!$type->isValid()) {
            $errorMessages = [];

            $errors = $type->getErrors(true);

            /** @var FormError $error */
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            throw new EntityException('Informe os campos obrigatórios', $errorMessages);
        }

        try {
            $this->repository->save($loteriaPremio);
        } catch (\Exception $e) {
            throw new LoteriaException($e->getMessage(), $e->getCode(), $e);
        }

        $message = 'A loteria prémio foi atualizada com sucesso.';

        return $this->json(['code' => 201, 'message' => $message], 201);
    }
}
