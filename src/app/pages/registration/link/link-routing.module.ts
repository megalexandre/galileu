import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkAddComponent } from './link-add/link-add.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkComponent } from './link.component';

const routes: Routes = [
  {
    path: '',
    component: LinkComponent,
    children: [
    {
      path: 'list',
      component: LinkListComponent
    },
    {
      path: 'add',
      component: LinkAddComponent
    },
     /*
    {
      path: 'edit',
      component: CustomerEditComponent
    },
    {
      path: 'delete',
      component: CustomerDeleteComponent
    },
    */
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
export class LinkRoutingModule {
}

