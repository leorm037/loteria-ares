import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EntrarComponent } from "./entrar.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AutenticacaoService } from "../../services/autenticacao.service";
import { BreadcrumbService } from "../../services/breadcrumb.service";
import { MessageAlertService } from "../../services/message-alert.service";
import { routes } from "../../app.routes";

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

    it('Deve ser um formulário inválido.', () => {
        component.autenticacaoForm.controls['email'].setValue(null);
        component.autenticacaoForm.controls['senha'].setValue(null);
        expect(component.autenticacaoForm.valid).toBeFalsy();
        expect(component.autenticacaoForm.controls['email'].valid).toBeFalsy();
        expect(component.autenticacaoForm.controls['senha'].valid).toBeFalsy();
    });

    it('Deve ser um formulário válido.', () => {
        component.autenticacaoForm.controls['email'].setValue('exemplo@exemplo.com');
        component.autenticacaoForm.controls['senha'].setValue('123456');
        expect(component.autenticacaoForm.valid).toBeTruthy();
        expect(component.autenticacaoForm.controls['email'].valid).toBeTruthy();
        expect(component.autenticacaoForm.controls['senha'].valid).toBeTruthy();
    });

    it('Deve ter o breadcrumb definido.', () => {
        expect(breadcrumbService.getBreadcrumbs()).toMatchSnapshot();
    });

    it('Deve ter a URL /entrar definida.', () => {
        const route = routes.find(r => r.path === 'entrar');
        expect(route).toMatchSnapshot('rotaEntrar');
    });

});