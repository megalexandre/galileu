import { months } from './../@shared/month.enum';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { isValid } from 'date-fns';

export default class DateValidator {

  static  valid(): ValidatorFn {
    return (control: AbstractControl) => {
      const string = control.value
      if(string && string.length === 8){

        const day = Number(string.substr(0, 2));
        const month =Number(string.substr(2, 2));
        const year = Number(string.substr(4, 4));

        const date = new Date(year, month, day);

        if(!isValid(date)){
          return { dateNotValid: true };
        }
      }


      return null;
    };
  }
}

