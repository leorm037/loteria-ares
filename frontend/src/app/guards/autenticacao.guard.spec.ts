import { TestBed } from "@angular/core/testing";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AutenticacaoService } from "../services/autenticacao.service";
import { autenticacaoGuard } from "./autenticacao.guard";

describe('autenticacaoGuard', () => {
    let autenticacaoServiceMock: Partial<AutenticacaoService>;
    // let routerMock: Partial<Router>;
    let router: Router;

    let mockRoute: ActivatedRouteSnapshot;
    let mockState: RouterStateSnapshot;

    beforeEach(() => {
        autenticacaoServiceMock = {
            hasUsuario: jest.fn()
        };

        // routerMock = {
        //     navigate: jest.fn()
        // };

        TestBed.configureTestingModule({
            providers: [
                { provide: AutenticacaoService, useValue: autenticacaoServiceMock },
                // { provide: Router, useValue: routerMock }
                Router
            ]
        });

        mockRoute = {} as ActivatedRouteSnapshot;
        mockState = { url: '/bolao' } as RouterStateSnapshot;
        router = TestBed.inject(Router);
    });

    it('deve permitir acesso se o usuário estiver autenticado', () => {
        (autenticacaoServiceMock.hasUsuario as jest.Mock).mockReturnValue(true);

        const resultado = TestBed.runInInjectionContext(() => {
            return autenticacaoGuard(mockRoute, mockState);
        });

        expect(resultado).toBe(true);
    });

    // it('deve redirecionar para /entrar se o usuário não estiver autenticado', () => {
    //     (autenticacaoServiceMock.hasUsuario as jest.Mock).mockReturnValue(false);

    //     const resultado = TestBed.runInInjectionContext(() => {
    //         return autenticacaoGuard(mockRoute, mockState);
    //     });

    //     expect(router.navigate).toHaveBeenCalledWith(['/entrar'], {
    //         queryParams: { returnUrl: '/bolao' }
    //     });

    //     expect(resultado).toBe(false);
    // });
});
