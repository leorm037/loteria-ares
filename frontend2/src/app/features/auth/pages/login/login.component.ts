import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@app/core';
import { LOGGER_FN } from './../../../../core/tokens';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  private router = inject(Router);

  private logger = inject(LOGGER_FN);

  private service: AuthService = inject(AuthService);

  private fb: FormBuilder = inject(FormBuilder);

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
        error: (e) => {
          this.logger(`features.auth.pages.login: ${e}`);
        }
      });
      
      
    } else {
      this.logger(`features.auth.pages.login: Formulario invádilido`);
    }
  };



}
