import { PipeModule } from './../@pipe/pipe.module';
import { CustomerService } from './../pages/registration/customer/customer.service';
import { AcalModule } from './../@acal/acal.module';
import { NbCardModule, NbFormFieldModule, NbIconModule, NbSpinnerModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUserComponent } from './select-user/select-user.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    AcalModule,
    NbFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NbSpinnerModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    SelectUserComponent
  ],
  exports:[
    SelectUserComponent
  ],
  providers:[
    CustomerService,
  ]
})
export class ComponentModule { }