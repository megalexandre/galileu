import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HydrometerComponent } from './hydrometer/hydrometer.component';

const routes: Routes = [
  {
    path: '',
    component: HydrometerComponent,
    /*
    children: [
      {
        path: 'list',
      },
      {
        path: 'add',
      },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', redirectTo: 'list' },
    ]
    */
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HydrometerRoutingModule {
}

