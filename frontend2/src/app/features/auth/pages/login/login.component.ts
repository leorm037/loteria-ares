import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService, LOGGER_FN } from '@app/core';
import { AlertComponent } from "../../../../shared/components/alert/alert.component";
import { Alert, AlertService, AlertType } from '@app/shared';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, AlertComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  private router = inject(Router);

  private logger = inject(LOGGER_FN);

  private service: AuthService = inject(AuthService);

  private fb: FormBuilder = inject(FormBuilder);

  private alertService: AlertService = inject(AlertService);

  public form: FormGroup = this.fb.group({
    email: [null, [Validators.required]],
    senha: [null, [Validators.required]]
  });

  public onSubmit() {
    this.logger(`features.auth.pages.login: ${this.form.valid}`);
    
    if (this.form.valid) {
      const email = this.form.value.email;
      const senha = this.form.value.senha;

      this.service.authenticate(email, senha).subscribe({
        next: () => {
          const returnUrl = this.router.getCurrentNavigation()?.extras.state?.['returnUrl'] || '/';

          this.router.navigateByUrl(returnUrl);
        },
        error: (e: HttpErrorResponse) => {
          this.logger(`features.auth.pages.login: ${e.message}`);

          const alert: Alert = {
            type: AlertType.DANGER,
            message: "Não foi possível realizar a conexão. Tente novamente mais tarde."
          };

          this.alertService.send([alert]);
        }
      });
      
      
    } else {
      this.logger(`features.auth.pages.login: Formulario invádilido`);
    }
  };



}
