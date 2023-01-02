import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancialComponent } from './financial.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialComponent,
    children: [
      {
        path: 'management',
        loadChildren: () => import('./management/management.module')
          .then(m => m.ManagementModule),
      },
      {
        path: '',
        redirectTo: 'management',
      },
      {
        path: '**',
        redirectTo: 'management',
      },
    ],
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
export class FinancialRoutingModule {
}

