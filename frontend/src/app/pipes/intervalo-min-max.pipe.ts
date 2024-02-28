import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intervaloMinMax',
  standalone: true
})
export class IntervaloMinMaxPipe implements PipeTransform {

  transform(value: Array<number>): string {
    const min: number = Math.min(...value);
    const max: number = Math.max(...value);

    return `${min.toString().padStart(2, '0')} a ${max
      .toString()
      .padStart(2, '0')}`;
  }

}
