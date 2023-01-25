import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NbCardModule,
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
  ],

})
export class CustomerModule { }
