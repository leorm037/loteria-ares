<?php

namespace App\Controller\Api;

use App\Entity\Usuario;
use App\Repository\UsuarioRepository;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class UsuarioController extends AbstractController {

    public function __construct(
            private UsuarioRepository $repository,
            private SerializerInterface $serializer,
            private LoggerInterface $logger
    ) {
        
    }

    #[Route('/api/usuarios', name: 'app_api_usuario_save', methods: ['POST'])]
    public function save(
            Request $request,
            UserPasswordHasherInterface $userPasswordHash,
            ValidatorInterface $validator,
    ): JsonResponse {
        if ($request->getContentTypeFormat() != 'json') {
            $this->logger->error('Enviar a requisição em formato JSON para o cadastro de usuário');
            
            return $this->json([
                        'status' => 400,
                        'errors' => 'Bad Request',
                        'message' => 'Enviar a requisição em formato JSON'], 400);
        }

        $data = json_decode($request->getContent(), true);

        if (!isset($data['nome']) || !isset($data['email']) || !isset($data['plainPassword'])) {
            $this->logger->error('Campos obrigatórios não informados para o cadastro de usuário');
            
            return $this->json([
                        'status' => 422,
                        'errors' => 'Unprocessable Entity',
                        'message' => 'Informe os campos obrigatórios.'
            ], 422);
        }

        $nome = $data['nome'];
        $email = $data['email'];
        $planPassword = $data['plainPassword'];

        $usuario = new Usuario();
        $usuario
                ->setNome($nome)
                ->setEmail($email)
        ;

        $errors = $validator->validate($usuario);

        if (count($errors) > 0) {
            $errorMessages = [];

            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            return $this->json([
                        'status' => 400,
                        'error' => 'Bad Request',
                        'message' => 'Validação dos campos falhou',
                        'datail' => [$errorMessages]], 400);
        }

        $hashPassword = $userPasswordHash->hashPassword($usuario, $planPassword);
        
        $usuario
                ->setPassword($hashPassword)
                ->setRoles(['ROLE_USER'])
        ;

        $this->repository->save($usuario);

        return $this->json(['message' => 'Usuário cadastrado com sucesso.'], 201);
    }

    #[Route('/api/usuarios', name: 'app_api_usuario_get', methods: ['GET'])]
    public function getUsuario(): JsonResponse {
        return $this->json([
                    'message' => 'USUARIO',
                    'path' => 'src/Controller/Api/UsuarioController.php',
        ]);
    }

    #[Route('/api/usuarios', name: 'app_api_usuario_update', methods: ['PATCH'])]
    public function update(): JsonResponse {
        return $this->json([
                    'message' => 'UPDATE',
                    'path' => 'src/Controller/Api/UsuarioController.php',
        ]);
    }
}
