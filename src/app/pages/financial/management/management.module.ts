import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { ManagementService } from './management.service';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    ManagementRoutingModule
  ],
  declarations: [
    ManagementComponent
  ],
  providers:[
    ManagementService,
  ]
})
export class ManagementModule { }
