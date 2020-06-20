import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
      },
      {
        path: 'second',
        loadChildren: '../second/second.module#SecondPageModule'
      },
      {
        path: 'second/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'trabalhos',
        loadChildren: '../trabalhos/trabalhos.module#TrabalhosPageModule'
      },
      {
        path: 'oficinas',
        loadChildren: '../oficinas/oficinas.module#OficinasPageModule'
      },
      {
        path: 'orais',
        loadChildren: '../first-with-tabs2/first-with-tabs2.module#FirstWithTabs2PageModule'
      },
      // {
      //   path: 'premiacao',
      //   loadChildren: '../premiacao/premiacao.module#PremiacaoPageModule'
      // },
      {
        path: 'culturais',
        loadChildren: '../first-with-tabs3/first-with-tabs3.module#FirstWithTabs3PageModule'
      },
      {
        path: 'sobre',
        loadChildren: '../sobre/sobre.module#SobrePageModule'
      },
      {
        path: 'anteriores',
        loadChildren: '../trabalhos-anteriores/trabalhos-anteriores.module#TrabalhosAnterioresPageModule'
      },
      {
      path: 'novasideias',
      loadChildren: '../novasideias/novasideias.module#NovasideiasPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }