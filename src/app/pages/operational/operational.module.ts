import { NbCardModule } from '@nebular/theme';
import { OperationalRoutingModule } from './operational-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationalComponent } from './operational.component';
import { KanbamComponent } from './kanbam/kanbam.component';
import { KanbamColumnComponent } from './kanbam/kanbam-column/kanbam-column.component';
import { KanbamColumnItemComponent } from './kanbam/kanbam-column-item/kanbam-column-item.component';



@NgModule({
  imports: [
    CommonModule,
    OperationalRoutingModule,
    NbCardModule,
  ],
  declarations: [
    OperationalComponent,
    KanbamComponent,
    KanbamColumnComponent,
    KanbamColumnItemComponent
  ],

})
export class OperationalModule { }
