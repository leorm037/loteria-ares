import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { BreadcrumbService } from "../../services/breadcrumb.service";
import { LoteriaService } from "../../services/loteria.service";
import { MessageAlertService } from "../../services/message-alert.service";
import { LoteriaComponent } from "./loteria.component";
import { routes } from "../../app.routes";

describe('LoteriaComponent', () => {
    let component: LoteriaComponent;
    let fixture: ComponentFixture<LoteriaComponent>;
    let breadcrumbService: BreadcrumbService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                NgbAlertModule
            ],
            providers: [
                LoteriaService,
                BreadcrumbService,
                MessageAlertService
            ]
        });
        fixture = TestBed.createComponent(LoteriaComponent);
        component = fixture.componentInstance;
        breadcrumbService = TestBed.inject(BreadcrumbService);
        fixture.detectChanges();
    });

    it('Deve ser criado.', () => {
        expect(component).toBeTruthy();
    });

    it('Deve ter o breadcrumb definido.', () => {
        expect(breadcrumbService.getBreadcrumbs()).toMatchSnapshot();
    });

    it('Deve ter a rota /loteria definida.', () => {
        const route = routes.find((r) => r.path === 'loteria');
        expect(route).toMatchSnapshot('rotaLoteria');
    });

});