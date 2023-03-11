import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reference'
})
export class ReferencePipe implements PipeTransform {

  transform(reference: string): string {

    if(!reference){
      return //garbage in garbage out
    }

    if(reference.length === 6){
      return reference.substring(0,2) +"/"+ reference.substring(2,6)
    }

    return reference;
  }

}
