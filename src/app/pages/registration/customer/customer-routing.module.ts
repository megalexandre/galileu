import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
    {
      path: 'list',
      component: CustomerListComponent
    },
    {
      path: 'add',
      component: CustomerAddComponent
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', redirectTo: 'list' },
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
export class CustomerRoutingModule {
}

