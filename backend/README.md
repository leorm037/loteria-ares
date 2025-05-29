# Apache 2 Httpd
<details>
    <summary><strong>Clique aqui para expandir a lista</strong></summary>
## Criar chave para habilitar https
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout docker/httpd/certs/server.key \
  -out docker/httpd/certs/server.crt \
  -subj "/C=BR/ST=DF/L=Brasilia/O=PaginaEmConstrucao/OU=IT/CN=localhost"
```


</details>

# JWT
<details>
    <summary><strong>Clique aqui para expandir a lista</strong></summary>
## Gerar chave para criptografar token

```
openssl genpkey -algorithm RSA -aes256 -out config/jwt/private.pem -pkeyopt rsa_keygen_bits:4096
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
chmod 600 config/jwt/private.pem config/jwt/public.pem
chmod 600 config/jwt/private.pem config/jwt/private.pem
```

# Usuário

## Criar novo usuário para ambiente de desenvolvimento

```
php bin/console security:user:create email=admin@example.com password=123456 roles=ROLE_USER
```
</details>