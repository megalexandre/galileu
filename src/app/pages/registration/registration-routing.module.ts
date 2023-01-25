import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module')
          .then(m => m.CustomerModule),
      },
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: '**', redirectTo: 'customer' },
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
export class RegistrationRoutingModule {
}

