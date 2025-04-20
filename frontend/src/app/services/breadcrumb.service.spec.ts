import { TestBed } from "@angular/core/testing";
import { BreadcrumbService } from "./breadcrumb.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Breadcrumb } from "../interfaces/breadcrumb";

describe('BreadcrumbComponent', () => {
    let service: BreadcrumbService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [BreadcrumbService]
        });

        service = TestBed.inject(BreadcrumbService);
    });

    it('Deve ser criado.', () => {
        expect(service).toBeTruthy();
    });

    it('Deve retornar null quando não houver breadcrumbs.', () => {
        service.getBreadcrumbs().subscribe((breadcrumbs) => {
            expect(breadcrumbs).toBeNull();
        });
    });

    it('Deve limpar e retornar breadcrumbs quando informado.', () => {
        const clearSpy = jest.spyOn(service, 'clear');
        const breadcrumbsEsperado: Breadcrumb[] = [
            {
                href: "/bolao",
                iconClass: "fa-regular fa-futbol",
                texto: "Bolão"
            },
            {
                iconClass: "bi bi-plus",
                texto: "Novo"
            }
        ];

        service.sendBreadcrumb(breadcrumbsEsperado);

        expect(clearSpy).toHaveBeenCalled();

        service.getBreadcrumbs().subscribe((result) => {
            expect(result).toEqual(breadcrumbsEsperado);
        });
    });
});