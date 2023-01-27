
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identification'
})
export class IdentificationPipe implements PipeTransform {

  transform(value: any): any {

    return value
      .replace(/[^0-9]/, '')
      .padStart(11, '0')
      .substr(0, 11)
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');
  }

}
