import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkRoutingModule } from './link-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbIconModule, NbFormFieldModule, NbStepperModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { NgxMaskModule } from 'ngx-mask';
import { LinkComponent } from './link.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkService } from './link-service.service';
import { LinkAddComponent } from './link-add/link-add.component';
import { ComponentModule } from 'app/component/component.module';

@NgModule({

  imports: [
    CommonModule,
    LinkRoutingModule,
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
    NbStepperModule,
    ComponentModule,
  ],
  declarations: [
    LinkComponent,
    LinkListComponent,
    LinkAddComponent,
  ],
  providers: [
    LinkService
  ]
})
export class LinkModule { }
