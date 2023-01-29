import { NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTableComponent } from './table/app-table/app-table.component';
import { AppTableFooterComponent } from './table/app-table-footer/app-table-footer.component';
import { ErrorMessageComponent } from './form/error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbIconModule,
  ],
  declarations: [
    AppTableComponent,
    AppTableFooterComponent,
    ErrorMessageComponent,
  ],
  exports:[
    AppTableComponent,
    AppTableFooterComponent,
    ErrorMessageComponent,
  ]
})
export class AcalModule { }
