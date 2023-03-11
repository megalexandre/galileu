import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationPipe } from './identification.pipe';
import { CategoryPipe } from './category.pipe';
import { ParamPipe } from './param/param.pipe';
import { ReferencePipe } from './reference/reference.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IdentificationPipe,
    CategoryPipe,
    ParamPipe,
    ReferencePipe
  ],
  exports:[
    IdentificationPipe,
    CategoryPipe,
    ParamPipe,
    ReferencePipe,
  ]
})
export class PipeModule { }
