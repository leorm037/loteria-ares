import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscricaoComponent } from './inscricao.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { MessageAlertService } from '../../services/message-alert.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../app.routes';

describe('InscricaoComponent', () => {
    let breadcrumbService: BreadcrumbService;
    let component: InscricaoComponent;
    let fixture: ComponentFixture<InscricaoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [
                FormBuilder,
                UsuarioService,
                BreadcrumbService,
                MessageAlertService
            ]
        });
        breadcrumbService = TestBed.inject(BreadcrumbService);
        fixture = TestBed.createComponent(InscricaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deve ser criado.', () => {
        expect(component).toBeTruthy();
    });

    it('Deve ser criado o formulário de inscrição.', () => {
        expect(component.inscricaoForm.value).toEqual({
            nomeCompleto: null,
            email: null,
            senha: null,
            senhaConfirmar: null
        });
    });

    it('Deve ser inválido o formulário de inscrição quando não preenchido.', () => {
        component.inscricaoForm.controls['nomeCompleto'].setValue('');
        component.inscricaoForm.controls['email'].setValue('');
        component.inscricaoForm.controls['senha'].setValue('');
        component.inscricaoForm.controls['senhaConfirmar'].setValue('');

        expect(component.inscricaoForm.valid).toBeFalsy();
    });

    it('Deve ser válido o formulário de inscrição quando preenchido.', () => {
        component.inscricaoForm.controls['nomeCompleto'].setValue('Antonio Magalhães');
        component.inscricaoForm.controls['email'].setValue('antonio@magalhaes.com.br');
        component.inscricaoForm.controls['senha'].setValue('123456');
        component.inscricaoForm.controls['senhaConfirmar'].setValue('123456');

        expect(component.inscricaoForm.valid).toBeTruthy();
    });

    it('Deve ser inválido o campo de senha com menos de 6 caracteres.', () => {
        component.inscricaoForm.controls['senha'].setValue('12345');

        expect(component.inscricaoForm.controls['senha'].valid).toBeFalsy();
    });

    it('Deve ser inválido o campo confirmar senha diferente ao campo senha.', () => {
        component.inscricaoForm.controls['senha'].setValue('123456');
        component.inscricaoForm.controls['senhaConfirmar'].setValue('654321');

        expect(component.inscricaoForm.valid).toBeFalsy();
    });

    it('Deve ter o breadcrumb definido.', () => {
        expect(breadcrumbService.getBreadcrumbs()).toMatchSnapshot();
    });

    it('Deve ter a URL /inscricao para acessar o componente InscricaoComponent.', () => {
        const route = routes.find(r => r.path === 'inscricao');
        expect(route).toMatchSnapshot('rotaInscricao');
    });
});