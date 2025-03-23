import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function camposIguaisValidator(campo1: string, campo2: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const valor1 = formGroup.get(campo1)?.value;
    const valor2 = formGroup.get(campo2)?.value;

    if ((valor1 !== null) && (valor1 !== valor2)) {
      return { camposIguais: true };
    }

    return null;
  };
}
