import { PlaceService } from './../pages/registration/place/place.service';
import { SelectPlaceComponent } from './select-place/select-place.component';
import { PipeModule } from './../@pipe/pipe.module';
import { CustomerService } from './../pages/registration/customer/customer.service';
import { AcalModule } from './../@acal/acal.module';
import { NbCardModule, NbFormFieldModule, NbIconModule, NbSpinnerModule, NbInputModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUserComponent } from './select-user/select-user.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupService } from 'app/pages/registration/group/group.service';
import { SelectAddressComponent } from './select-address/select-address.component';
import { AddressService } from 'app/pages/registration/address/address.service';
import { SelectGroupComponent } from './select-group/select-group.component';



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
    NbSelectModule,
  ],
  declarations: [
    SelectGroupComponent,
    SelectUserComponent,
    SelectPlaceComponent,
    SelectAddressComponent,
  ],
  exports:[
    SelectGroupComponent,
    SelectUserComponent,
    SelectPlaceComponent,
    SelectAddressComponent,
  ],
  providers:[
    AddressService,
    CustomerService,
    PlaceService,
    GroupService,
  ]
})
export class ComponentModule { }
