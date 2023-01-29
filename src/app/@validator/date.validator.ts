import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class DatetValidator {

  static  valid(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value

      return null;
    };
  }

}
