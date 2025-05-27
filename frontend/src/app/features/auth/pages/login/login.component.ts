import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService, LOGGER_FN } from '@app/core';
import { AlertComponent } from "../../../../shared/components/alert/alert.component";
import { Alert, AlertService, AlertType } from '@app/shared';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, AlertComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  public form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['leorm037@gmail.com', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required]]
    });
  }

  public onSubmit() { 
    if (this.form.valid) {
      const email = this.form.value.email;
      const senha = this.form.value.senha;

      this.service.authenticate(email, senha).subscribe({
        error: (e: HttpErrorResponse) => {
          const alert: Alert = {
            type: AlertType.DANGER,
            message: "Não foi possível realizar a conexão. Tente novamente mais tarde."
          };

          this.alertService.send([alert]);
        }
      });
      
      const returnUrl = this.router.getCurrentNavigation()?.extras.state?.['returnUrl'] || '/';

      this.router.navigateByUrl(returnUrl);
      
    }
  };



}
