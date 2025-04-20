import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AutenticacaoService } from "./autenticacao.service";
import { TestBed } from "@angular/core/testing";

describe('AutenticacaoService', () => {
    let service: AutenticacaoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: []
        });

        service = TestBed.inject(AutenticacaoService);
    });

    it('Deve ser criado.', () => {
        expect(service).toBeTruthy();
    });
});