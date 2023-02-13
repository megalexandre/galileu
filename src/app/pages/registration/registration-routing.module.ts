import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      {
        path: 'group',
        loadChildren: () => import('./group/group.module')
          .then(m => m.GroupModule),
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module')
          .then(m => m.AddressModule),
      },
      {
        path: 'place',
        loadChildren: () => import('./place/place.module')
          .then(m => m.PlaceModule),
      },
      {
        path: 'link',
        loadChildren: () => import('./link/link.module')
          .then(m => m.LinkModule),
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

