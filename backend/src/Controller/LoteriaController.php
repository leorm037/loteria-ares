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

    #[Route('/loterias', name: 'app_loteria_list', methods: ['GET'])]
    public function list(Request $request): JsonResponse
    {
        if ($request->query->has('page')) {
            $pageSize = $request->get('page-size', 10);

            $page = $request->get('page', 1);

            $loterias = $this->repository->list($pageSize, $page);
        } else {
            $loterias = $this->repository->listOrderByNome();
        }

        return $this->json(['code' => 200, 'data' => $loterias], 200);
    }

    #[Route('/api/loterias', name: 'app_loteria_new', methods: ['POST', 'PUT'])]
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

    #[Route('/api/loterias/{uuid:Loteria}', name: 'app_loteria_new', methods: ['PUT'])]
    public function update(Request $request, Loteria $loteria): JsonResponse
    {
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
        } catch (\Exception $e) {
            throw new LoteriaException($e->getMessage(), $e->getCode(), $e);
        }

        $message = "A loteria com o nome \"{$loteria->getNome()}\" foi atualizada com sucesso.";

        return $this->json(['code' => 201, 'message' => $message], 201);
    }
}
