import { TestBed } from "@angular/core/testing";
import { TokenService } from "..";

describe('TokenService', () => {
    let service: TokenService;
    const TOKEN_TESTE = 'tokenTeste';

    beforeEach(() => {  
        service = TestBed.inject(TokenService);
    });

    it('Deve ser criado.', () => {
        expect(service).toBeTruthy();
    });

    it('Deve salvar o token no localStorage.', () => {
        service.save(TOKEN_TESTE);
        expect(service.getToken()).toBe(TOKEN_TESTE);
    })

    it('Deve ter token.', () => {
        service.save(TOKEN_TESTE);
        expect(service.hasToken()).toBeTruthy();
    });
        
    it('Deve retornar vazio quando remover token.', () => {
        service.remove();
        expect(service.getToken()).toBe('');
        expect(service.hasToken()).toBeFalsy();
    });


});