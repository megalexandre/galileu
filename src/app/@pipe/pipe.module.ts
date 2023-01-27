import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationPipe } from './identification.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IdentificationPipe
  ],
  exports:[
    IdentificationPipe
  ]
})
export class PipeModule { }
