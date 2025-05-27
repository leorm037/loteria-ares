<?php

namespace App\Controller;

use App\Entity\Usuario;
use App\Exception\EntityException;
use App\Exception\LoteriaException;
use App\Form\UsuarioType;
use App\Repository\UsuarioRepository;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormErrorIterator;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class RegisterController extends AbstractController
{

    public function __construct(
            private UsuarioRepository $repository
    )
    {
        
    }

    #[Route('/api/register', name: 'app_api_register', methods: ['POST'])]
    public function save(
            Request $request,
            UserPasswordHasherInterface $userPasswordHash,
            ValidatorInterface $validator
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $usuario = new Usuario();

        $type = $this->createForm(UsuarioType::class, $usuario);

        $type->submit($data);

        if (!$type->isValid()) {
            $errorMessages = [];

            /** @var FormErrorIterator $errors */
            $errors = $type->getErrors(true);

            /** @var FormError $error */
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            throw new EntityException("Informe os campos obrigatórios", $errorMessages);
        }

        $hashPassword = $userPasswordHash->hashPassword($usuario, $usuario->getPassword());

        $usuario
                ->setPassword($hashPassword)
                ->setRoles(['ROLE_USER'])
        ;

        try {
            $this->repository->save($usuario);
        } catch (UniqueConstraintViolationException $e) {
            throw new EntityException("O e-mail '{$usuario->getEmail()}' já está cadastrado.", [$e->getMessage()]);
        } catch (Exception $e) {
            throw new LoteriaException($e->getMessage(), $e->getCode(), $e);
        }

        return $this->json([
                    'code' => 201,
                    'message' => "O usuário com o e-mail '{$usuario->getEmail()}' foi cadastrado com sucesso."
                        ], 201);
    }
}
