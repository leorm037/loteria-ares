<?php

namespace App\Controller;

use App\Entity\Usuario;
use App\Repository\UsuarioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

final class UsuarioController extends AbstractController
{

    public function __construct(
            private UsuarioRepository $repository
    )
    {
        
    }

    #[Route('/api/usuarios', name: 'app_api_usuario', methods: ['POST'])]
    public function save(
            Request $request,
            UserPasswordHasherInterface $userPasswordHash
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $nome = $data['nome'];
        $email = $data['email'];
        $plainPassword = $data['plainPassword'];

        $usuario = new Usuario();
        $usuario
                ->setNome($nome)
                ->setEmail($email)
                ->setPassword($plainPassword)
        ;

        $hashPassword = $userPasswordHash->hashPassword($usuario, $plainPassword);

        $usuario
                ->setPassword($hashPassword)
                ->setRoles(['ROLE_USER'])
        ;

        $this->repository->save($usuario);

        return $this->json(['message' => "O usuário com o e-mail \"{$usuario->getEmail}\" foi cadastrado com sucesso."], 201);
    }
}
