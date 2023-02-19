import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '@model/default/group';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(category: Category): string {

    if(!category){
      return //garbage in garbage out
    }

    if(category.toString() === 'FOUNDER'){
      return "Fundador"
    }
    if(category.toString() === 'EFFECTIVE'){
      return "Efetivo"
    }
    if(category.toString() === 'TEMPORARY'){
      return "Temporário"
    }

    return category.toString();
  }

}
