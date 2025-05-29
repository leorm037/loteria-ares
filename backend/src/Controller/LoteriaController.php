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
use App\Exception\EntityException;
use App\Exception\LoteriaException;
use App\Form\LoteriaType;
use App\Repository\LoteriaRepository;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class LoteriaController extends AbstractController
{
    public function __construct(
        private LoteriaRepository $repository,
    ) {
    }

    #[Route('/api/loterias', name: 'app_loteria_list', methods: ['GET'])]
    public function list(Request $request): JsonResponse
    {
        $pageSize = $request->get('page-size', 10);

        $page = $request->get('page', 1);

        $loterias = $this->repository->list($pageSize, $page);

        $data = [
            'collection_size' => $loterias->count(),
            'loterias' => $loterias->getQuery()->getResult(),
        ];

        return $this->json(['code' => 200, 'data' => $loterias], 200, [], ['groups' => 'list']);
    }

    #[Route('/api/loterias/{uuid}', name: 'app_loteria_find', methods: ['GET'], requirements: ['uuid' => '[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}'])]
    public function find(Loteria $loteria): JsonResponse
    {
        return $this->json(['code' => 200, 'data' => $loteria], 200, [], ['groups' => 'list']);
    }

    #[Route('/api/loterias', name: 'app_loteria_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $loteria = new Loteria();

        /** @var FormInterface $type */
        $type = $this->createForm(LoteriaType::class, $loteria);

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
            $this->repository->save($loteria);
        } catch (UniqueConstraintViolationException $e) {
            throw new EntityException("A loteria \"{$loteria->getNome()}\" já está cadastrada.");
        } catch (\Exception $e) {
            throw new LoteriaException($e->getMessage(), $e->getCode(), $e);
        }

        $message = "A loteria com o nome \"{$loteria->getNome()}\" foi salva com sucesso.";

        return $this->json(['code' => 201, 'message' => $message], 201);
    }

    #[Route('/api/loterias/{uuid}', name: 'app_loteria_update', methods: ['PUT'], requirements: ['uuid' => '[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}'])]
    public function update(Loteria $loteria, Request $request): JsonResponse
    {
        $type = $this->createForm(LoteriaType::class, $loteria);

        $data = json_decode($request->getContent(), true);

        $type->submit($data);

        if (!$type->isValid()) {
            $errorMessages = [];

            $errors = $type->getErrors(true);

            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            throw new EntityException('Informe os campos obrigatórios', $errorMessages);
        }

        try {
            $this->repository->save($loteria);
        } catch (\Exception $e) {
            throw new LoteriaException($e->getMessage(), $e->getCode(), $e);
        }

        $message = "A loteria com o nome \"{$loteria->getNome()}\" foi atualizada com sucesso.";

        return $this->json(['code' => 201, 'message' => $message], 201);
    }
}
