import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstWithTabs3Page } from './first-with-tabs3.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FirstWithTabs3Page,
    children: [
      {
        path: 'tab6', //programação cultural de quarta
        loadChildren: '../tab6/tab6.module#Tab6PageModule'
      },
      {
        path: 'tab6/details',
        loadChildren: '../details6/details6.module#Details6PageModule'
      },
      {
        path: 'tab7', //programação cultural de quinta
        loadChildren: '../tab7/tab7.module#Tab7PageModule'
      },
      {
        path: 'tab7/details',
        loadChildren: '../details7/details7.module#Details7PageModule'
      },
      {
        path: 'tab8', //programação cultural de quinta
        loadChildren: '../tab8/tab8.module#Tab8PageModule'
      },
      {
        path: 'tab8/details',
        loadChildren: '../details8/details8.module#Details8PageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab6',
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
  declarations: [FirstWithTabs3Page]
})
export class FirstWithTabs3PageModule { }