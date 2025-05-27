import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AutenticacaoService } from "./autenticacao.service";
import { TestBed } from "@angular/core/testing";
import { TokenService } from "./token.service";

describe('AutenticacaoService', () => {
    let tokenService: TokenService;
    let service: AutenticacaoService;

    const TOKEN = '{"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3NDU1MzIzNDksImV4cCI6MTc0NTUzNTk0OSwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6Imxlb3JtMDM3QGdtYWlsLmNvbSJ9.Hlrrld73ynRwfXUnIYtPhr47Ryw6mXZsKd8mhcFvtiHvD4Cv2xvOqyY58UDQoW30udlDDs5dz5UJ84AV4KM1qy1zgQGSyTxgFMrDv0cjZ8aaWhZhleMrfclweSJz6OblTJTdt7p61DLppGahitW7Hm3KmsXYow6nvpoYfQxGLIYwk4oW7wGVjlTdU4VlyBwdC9dxlegSgj_xH7cLcKGYmUQ0v98UglF01HByvRrTREe4a29-0kmi9Jfcpal8OMD5u-Pn1wfB4Yk6QnWYfxXgWcuUR-iV7LsgIA-VbvxqoAoBpCRFBUlEkcmBCA0nzG42f9OLL8EV0oW8ogtnzSSJ58yRHpaMTFIzuNdgmbCmcbIg6br5p3bKfEjaTHAoJJviKdFkzrs-J94BW1YYuuUlufzzV7NoXZpSmWwLPNKKpePHRJ_JXjtfBuXJmpPO_S35jV-Y0tLOhZp40YTdVnREXypJ2kB3I6TKUBkvoHZ0zykmhYadd8gZehBDJ1xcscp3rsVwPvl3gMonxpaYqBf7PLkZMzYFIG9BHTRuIUeY-8u5T-yZDeNjRXfmLg1_6ht5RJQhqdSTpJmKDrseP6fJ50heqtqoAAmF85RUY5g0n9C37icz3h5BVv_nYpviYUXDLAIjBmyhhen2obbOaDx8F2Rmm0-3H3NCXXfCQMr9dE8"}';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: []
        });

        tokenService = TestBed.inject(TokenService);
        service = TestBed.inject(AutenticacaoService);
    });

    it('Deve ser criado.', () => {
        expect(service).toBeTruthy();
    });

    it('Descrip', () => {
        tokenService.save(TOKEN);
        service.decodificarToken();
    });
});