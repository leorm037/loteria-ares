import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { BreadcrumbService } from "../../services/breadcrumb.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Breadcrumb } from "../../interfaces/breadcrumb";

describe('BreadcrumbComponent', () => {
    let component: BreadcrumbComponent;
    let fixture: ComponentFixture<BreadcrumbComponent>;
    let service: BreadcrumbService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BreadcrumbComponent, 
                RouterTestingModule
            ],
            providers: [
                BreadcrumbService
            ]
        });

        service = TestBed.inject(BreadcrumbService);
        fixture = TestBed.createComponent(BreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deve ser criado.', () => {
        expect(component).toBeTruthy();
    });

    it('Deve estar vazio quando iniciar.', () => {
        expect(component.breadcrumbs).toBeNull();
    });

    it('Deve ter a class com o nome', () => {
        const breadcrumbs: Breadcrumb[] = [
            {
                href: "/loteria",
                iconClass: "fa-solid fa-clover icon-rotate-45",
                texto: "Loteria"
              },
              {
                iconClass: "bi bi-pencil-square",
                texto: "Alterar"
              }
        ];

        service.sendBreadcrumb(breadcrumbs);
        fixture.detectChanges();
        const biPencilSquare = fixture.nativeElement.querySelector('.bi-pencil-square');
        expect(biPencilSquare).toBeTruthy();
    });

}
);