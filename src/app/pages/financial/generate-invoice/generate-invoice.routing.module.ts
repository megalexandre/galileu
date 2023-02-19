import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateInvoiceComponent } from './generate-invoice.component';


const routes: Routes = [
  {
    path: '',
    component: GenerateInvoiceComponent,
    children: [
      /*
      {
        path: 'generate-invoice',
        loadChildren: () => import('./generate-invoice/generate-invoice.module')
          .then(m => m.GenerateInvoiceModule),
      },
      */

    ],
  },
  {
    path: '',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
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
export class GenerateInvoiceRoutingModule {
}

