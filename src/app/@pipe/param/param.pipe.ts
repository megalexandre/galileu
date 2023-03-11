import { Pipe, PipeTransform } from '@angular/core';
import { params } from '@model/default/quality';

@Pipe({
  name: 'param'
})
export class ParamPipe implements PipeTransform {

  transform(title: string): string {
    if(!title){
      return;
    }

    if(params.filter(p =>p.title === title ).length > 0){
      return params.find(p =>p.title === title ).value
    }

    return title;
  }

}
