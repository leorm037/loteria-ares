<?php

namespace App\Controller;

use App\Entity\Usuario;
use App\Repository\UsuarioRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class AuthController extends AbstractController
{

    public function __construct(
            private UserPasswordHasherInterface $userPasswordHasher,
            private UsuarioRepository $usuarioRepository
    )
    {
        
    }

    #[Route('/api/inscreva-se', name: 'app_auth_inscreva-se', methods: ['POST'])]
    #[OA\Response(
                response: 200,
                description: 'Cadastro de novos usuários.',
                content: new OA\JsonContent(
                        type: 'array',
                        items: new OA\Items(
                                ref: new Model(type: Usuario::class)
                        )
                )
        )]
    #[OA\RequestBody(new Model(type: Usuario::class))]
    public function new(Request $request): JsonResponse
    {
        $usuarioJson = $request->toArray();

        $usuario = new Usuario();
        $usuario
                ->setNome($usuarioJson['nome'])
                ->setEmail($usuarioJson['email'])
                ->setCelular($usuarioJson['celular'])
                ->setRoles(['ROLE_USER'])
                ->setPassword(
                        $this->userPasswordHasher->hashPassword($usuario, $usuarioJson['senha'])
                )
        ;       
        
        $this->usuarioRepository->save($usuario, true);
        
        $message = [
            'code' => 200,
            'status' => 'success',
            'messages' => [
                'code' => 200,
                'status' => 'success',
                'message' => "Usuário \"{$usuario->getNome()}\" cadastrado com sucesso!"
            ]
        ];
        
        return $this->json($message);
    }
}
