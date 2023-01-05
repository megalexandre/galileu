import { OperationalComponent } from './operational.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbamComponent } from './kanbam/kanbam.component';

const routes: Routes = [
  {
    path: '',
    component: OperationalComponent,
    children: [
    {
      path: 'kanbam',
      component: KanbamComponent,
    },
    { path: '', redirectTo: 'kanbam', pathMatch: 'full' },
    { path: '**', redirectTo: 'kanbam' },
    ]
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
export class OperationalRoutingModule {
}

