# JWT

## Gerar chave para criptografar token

```
openssl genpkey -algorithm RSA -aes256 -out config/jwt/private.pem -pkeyopt rsa_keygen_bits:4096
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
chmod 600 config/jwt/private.pem config/jwt/public.pem
```

# Usuário

## Criar novo usuário para ambiente de desenvolvimento

```
php bin/console security:user:create email=admin@example.com password=123456 roles=ROLE_USER
```