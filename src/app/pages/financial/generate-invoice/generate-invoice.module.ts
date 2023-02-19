import { AcalModule } from './../../../@acal/acal.module';
import { ComponentModule } from './../../../component/component.module';
import { NbCardModule, NbSpinnerModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';
import { GenerateInvoiceComponent } from './generate-invoice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateInvoiceRoutingModule } from './generate-invoice.routing.module';

@NgModule({
  imports: [
    CommonModule,
    GenerateInvoiceRoutingModule,
    NbCardModule,
    NbSpinnerModule,
    NbInputModule,
    NbCheckboxModule,
    AcalModule,
  ],
  declarations: [
    GenerateInvoiceComponent,
  ],
})
export class GenerateInvoiceModule { }
