import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributionComponent } from './distribution.component';
import { NbCardModule, NbSelectModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { LibraryModule } from 'app/@library/library.module';
import { DistributionService } from './distribution.service';

@NgModule({
  imports: [
    CommonModule,
    LibraryModule,
    NbCardModule,
    NbSelectModule,
    NbIconModule,
    NbSpinnerModule,
  ],
  declarations: [
    DistributionComponent,
  ],
  exports: [
    DistributionComponent,
  ],
  providers: [
    DistributionService,
  ],

})
export class DistributionModule { }
