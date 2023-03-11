
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'param'
})
export class ParamPipe implements PipeTransform {

  transform(value: any): any {
    if(!value){
      return //garbage in garbage out
    }

    return value
  }

}
