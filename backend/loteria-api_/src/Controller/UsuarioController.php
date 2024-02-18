<?php

/*
 *     This file is part of Loteria-API.
 *
 *     (c) Leonardo Rodrigues Marques <leonardo@rodriguesmarques.com.br>
 *
 *     This source file is subject to the MIT license that is bundled
 *     with this source code in the file LICENSE.
 */

namespace App\Controller;

use App\Entity\Usuario;
use App\Repository\UsuarioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\ConstraintViolationInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/usuario', name: 'app_usuario_')]
class UsuarioController extends AbstractController
{

    public function __construct(
            private UserPasswordHasherInterface $userPasswordHasher,
            private UsuarioRepository $repository,
            private ValidatorInterface $validator
    )
    {
        
    }

    #[Route('/new', name: 'new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        
        $usuario = new Usuario();
        $usuario
                ->setNome($request->request->get('nome', ""))
                ->setCelular($request->request->get('celular', null))
                ->setEmail($request->request->get('email', ""))
                ->setRoles(['ROLE_USER'])
                ->setPassword($request->request->get('senha', ""))
        ;
        
        $violations = $this->validator->validate($usuario);       

        if ($violations->count() > 0) {
            $result = [
                'status' => 'error',
                'code' => 406
            ];

            /** @var ConstraintViolationInterface $violation */
            foreach ($violations as $violation) {
                $result['messages'][$violation->getPropertyPath()] = $violation->getMessage();
            }

            return $this->json($result, 406);
        }

        $usuario->setPassword(
                $this->userPasswordHasher->hashPassword($usuario, $request->request->get('senha'))
        );

        $this->repository->save($usuario, true);

        $result = ['status' => 'success', 'code' => 201];

        return $this->json($result, 201);
    }

    #[Route('/reset-password', name: 'reset_password', methods: ['POST'])]
    public function resetPassword(): JsonResponse
    {
        
    }
}
