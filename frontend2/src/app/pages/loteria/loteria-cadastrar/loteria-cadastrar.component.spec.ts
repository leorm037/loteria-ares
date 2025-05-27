import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { BreadcrumbService } from "../../../services/breadcrumb.service";
import { LoteriaCadastrarComponent } from "./loteria-cadastrar.component";

describe('LoteriaCadastrarComponent', () => {
    let component: LoteriaCadastrarComponent;
    let fixture: ComponentFixture<LoteriaCadastrarComponent>;
    let breadcrumbService: BreadcrumbService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule
            ],
            providers: [
                FormBuilder,
                BreadcrumbService,
                Router
            ]
        });

        breadcrumbService = TestBed.inject(BreadcrumbService);

        fixture = TestBed.createComponent(LoteriaCadastrarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Deve ser criado.', () => {
        expect(component).toBeTruthy();
    });

    it('Deve ser válido o formulário de cadastro quando preenchido.', () => {
        component.form.controls['nome'].setValue('Mega Sena');
        component.form.controls['apiUrl'].setValue('https://api.megasena.com.br');
        component.form.controls['apostas'].setValue([1, 2, 3, 4, 5]);
        component.form.controls['dezenas'].setValue([10, 20, 30, 40, 50]);

        expect(component.form.valid).toBeTruthy();
    });

    it('Deve ser inválido o formulário de cadastro quando não preenchido.', () => {
        component.form.controls['nome'].setValue('');
        component.form.controls['apiUrl'].setValue('');
        component.form.controls['apostas'].setValue('');
        component.form.controls['dezenas'].setValue('');

        expect(component.form.valid).toBeFalsy();
    });

    it('Deve conter o breadcrumb correto.', () => {        
        expect(breadcrumbService.getBreadcrumbs()).toMatchSnapshot();
    }


});