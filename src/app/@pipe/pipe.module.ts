import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationPipe } from './identification.pipe';
import { CategoryPipe } from './category.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IdentificationPipe,
    CategoryPipe
  ],
  exports:[
    IdentificationPipe,
    CategoryPipe
  ]
})
export class PipeModule { }
