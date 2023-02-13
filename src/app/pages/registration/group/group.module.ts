import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { NgxMaskModule } from 'ngx-mask';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { GroupService } from './group.service';
import { GroupAddComponent } from './group-add/group-add.component';

@NgModule({
  imports: [
    GroupRoutingModule,
    CommonModule,
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
    NbSelectModule,
  ],
  declarations: [
    GroupComponent,
    GroupListComponent,
    GroupAddComponent,
  ],
  providers: [
    GroupService,
  ]
})
export class GroupModule { }
