import { HydrometerRoutingModule } from './hydrometer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HydrometerComponent } from './hydrometer/hydrometer.component';

@NgModule({
  imports: [
    CommonModule,
    HydrometerRoutingModule,
  ],

  declarations: [
    HydrometerComponent,
  ],

})
export class HydrometerModule { }
