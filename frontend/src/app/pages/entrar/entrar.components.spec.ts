import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EntrarComponent } from "./entrar.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AutenticacaoService } from "../../services/autenticacao.service";
import { BreadcrumbService } from "../../services/breadcrumb.service";
import { MessageAlertService } from "../../services/message-alert.service";

describe('EntrarComponent', () => {
    let breadcrumbService: BreadcrumbService;
    let component: EntrarComponent;
    let fixture: ComponentFixture<EntrarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [
                FormBuilder,
                AutenticacaoService,
                BreadcrumbService,
                MessageAlertService
            ]
        });
        breadcrumbService = TestBed.inject(BreadcrumbService);
        fixture = TestBed.createComponent(EntrarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deve ser criado.', () => {
        expect(component).toBeTruthy();
    });

    it('Deve ser criado o formulário de autenticação.', () => {
        expect(component.autenticacaoForm.value).toEqual({
            email: null,
            senha: null,
            lembrar: false
        });
    });

    it('Deve ter o breadcrumb definido.', () => {
        expect(breadcrumbService.getBreadcrumbs()).toMatchSnapshot();
    });
});