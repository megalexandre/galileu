import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartPieAdvancedComponent } from './chart/chart-pie-advanced.component';
import { ChartPieComponent } from './chart/chart-pie.component';


@NgModule({

  imports: [
    CommonModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
  ],
  declarations: [
    ChartPieAdvancedComponent,
    ChartPieComponent,
  ],
  exports:[
    ChartPieAdvancedComponent,
    ChartPieComponent,
  ],
})
export class LibraryModule { }
