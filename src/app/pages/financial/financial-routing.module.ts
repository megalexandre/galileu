import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancialComponent } from './financial.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialComponent,
    children: [
      {
        path: 'generate-invoice',
        loadChildren: () => import('./generate-invoice/generate-invoice.module')
          .then(m => m.GenerateInvoiceModule),
      },
      {
        path: '',
        redirectTo: 'generate-invoice',
      },
      {
        path: '**',
        redirectTo: 'generate-invoice',
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

