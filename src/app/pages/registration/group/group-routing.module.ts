import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupComponent } from './group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,

    children: [
    {
      path: 'list',
      component: GroupListComponent
    },
    {
      path: 'add',
      component: GroupAddComponent
    },
    /*
    {
      path: 'edit',
      component: GroupEditComponent
    },
    {
      path: 'delete:id',
      component: GroupDeleteComponent
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
export class GroupRoutingModule {
}

