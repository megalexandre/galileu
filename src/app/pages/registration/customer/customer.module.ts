import { NgxMaskModule } from 'ngx-mask';
import { PipeModule } from './../../../@pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule, NbIconModule, NbFormFieldModule } from '@nebular/theme';
import { AcalModule } from './../../../@acal/acal.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    AcalModule,
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    PipeModule,
    NbFormFieldModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
  ],
  providers: [
    CustomerService,
  ]
})
export class CustomerModule { }
