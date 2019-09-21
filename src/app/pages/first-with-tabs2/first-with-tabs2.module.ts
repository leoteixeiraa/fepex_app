import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstWithTabs2Page } from './first-with-tabs2.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FirstWithTabs2Page,
    children: [
      {
        path: 'tab4', //programação geral de quarta feira
        loadChildren: '../tab4/tab4.module#Tab4PageModule'
      },
      {
        path: 'tab4/details',
        loadChildren: '../details3/details3.module#Details3PageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab4',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstWithTabs2Page]
})
export class FirstWithTabs2PageModule { }