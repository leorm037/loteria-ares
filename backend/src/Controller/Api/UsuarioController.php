<?php

namespace App\Controller\Api;

use App\Entity\Usuario;
use App\Exception\EntidadeException;
use App\Exception\EntidadeNaoPocessadaException;
use App\Exception\Exception;
use App\Exception\TipoException;
use App\Repository\UsuarioRepository;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class UsuarioController extends AbstractController
{

    public function __construct(
            private UsuarioRepository $repository
    )
    {
        
    }

    #[Route('/api/usuarios', name: 'app_api_usuario_save', methods: ['POST'])]
    public function save(
            Request $request,
            UserPasswordHasherInterface $userPasswordHash,
            ValidatorInterface $validator,
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['nome']) || !isset($data['email']) || !isset($data['plainPassword'])) {
            throw new EntidadeException("Informe os campos obrigatórios.", null, ["nome: string", "email: string", "plainPassword: string"]);
        }

        $nome = $data['nome'];
        $email = $data['email'];
        $plainPassword = $data['plainPassword'];

        $usuario = new Usuario();
        $usuario
                ->setNome($nome)
                ->setEmail($email)
                ->setPassword($plainPassword)
        ;

        $errors = $validator->validate($usuario);

        if (count($errors) > 0) {
            $errorMessages = [];

            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            throw new EntidadeException("Informe os campos obrigatórios.", null, $errorMessages);
        }

        $hashPassword = $userPasswordHash->hashPassword($usuario, $plainPassword);

        $usuario
                ->setPassword($hashPassword)
                ->setRoles(['ROLE_USER'])
        ;

        try {
            $this->repository->save($usuario);
        } catch (UniqueConstraintViolationException $e) {
            throw new EntidadeException("O e-mail \"{$usuario->getEmail()}\" já está cadastrado", $e);            
        } catch (Exception $e) {
            throw new EntidadeException($e->getMessage(), $e);
        }

        return $this->json(['message' => "O usuário com o e-mail \"{$usuario->getEmail()}\" foi cadastrado com sucesso."], 201);
    }

    #[Route('/api/usuarios', name: 'app_api_usuario_get', methods: ['GET'])]
    public function getUsuario(): JsonResponse
    {
        return $this->json([
                    'message' => 'USUARIO',
                    'path' => 'src/Controller/Api/UsuarioController.php',
        ]);
    }

    #[Route('/api/usuarios', name: 'app_api_usuario_update', methods: ['PATCH'])]
    public function update(): JsonResponse
    {
        return $this->json([
                    'message' => 'UPDATE',
                    'path' => 'src/Controller/Api/UsuarioController.php',
        ]);
    }
}
