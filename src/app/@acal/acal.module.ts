import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTableComponent } from './table/app-table/app-table.component';
import { AppTableFooterComponent } from './table/app-table-footer/app-table-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppTableComponent,
    AppTableFooterComponent,
  ],
  exports:[
    AppTableComponent,
    AppTableFooterComponent,
  ]
})
export class AcalModule { }
