import { TestBed } from "@angular/core/testing";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AutenticacaoService } from "../services/autenticacao.service";
import { autenticacaoGuard } from "./autenticacao.guard";

describe('autenticacaoGuard', () => {
    let autenticacaoServiceMock: Partial<AutenticacaoService>;
    let routerMock: Partial<Router>;

    beforeEach(() => {
        autenticacaoServiceMock = {
            isLoggedIn: jest.fn()
        } as unknown as jest.Mocked<AutenticacaoService>;

        routerMock = {
            navigate: jest.fn()
        } as unknown as jest.Mocked<Router>;

        activatedRouteSnapshotMock = {
            
        } as unknown as jest.Mocked<ActivatedRouteSnapshot>;

        routerStateSnapshotMock = {

        } as unknown as jest.Mocked<RouterStateSnapshot>;

    });

    it('deve permitir acesso se o usuário estiver autenticado', () => {
        (autenticacaoServiceMock.isLoggedIn as jest.Mock).mockReturnValue(true);

        const resultado = TestBed.runInInjectionContext(() => {
            return autenticacaoGuard(mockRoute, mockState);
        });

        expect(resultado).toBe(true);
    });
});
