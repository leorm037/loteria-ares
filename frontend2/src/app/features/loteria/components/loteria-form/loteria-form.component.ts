import { Component, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Loteria } from '@app/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-loteria-form',
  imports: [RouterModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './loteria-form.component.html'
})
export class LoteriaFormComponent implements OnInit, OnChanges {

  public title = input<string>('create');

  public loteria = input<Loteria | null>(null)

  public loteriaSubmit = output<Loteria>();

  public form!: FormGroup;

  public constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {   
    if (changes['loteria'] && this.loteria()) {
      this.form.patchValue({
        ...this.loteria()
      });
    }
  }

  public reset(): void {
    if(this.loteria()) {
      this.form.reset(this.loteria());
    } else {
      this.form.reset();
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      id: [null],
      nome: [null],
      apiUrl: [null],
      slugUrl: [null],
      apostas: [null],
      dezenas: [null],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const loteria: Loteria = {
        id: this.form.value.id,
        nome: this.form.value.nome,
        apiUrl: this.form.value.apiUrl,
        slugUrl: this.form.value.slugUrl,
        apostas: this.form.value.apostas,
        dezenas: this.form.value.dezenas,
        createdAt: this.loteria()?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      this.loteriaSubmit.emit(loteria);
    }
  }

}
