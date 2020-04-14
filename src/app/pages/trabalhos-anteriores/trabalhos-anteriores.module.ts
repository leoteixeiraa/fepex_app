import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrabalhosAnterioresPage } from './trabalhos-anteriores.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalhosAnterioresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrabalhosAnterioresPage]
})
export class TrabalhosAnterioresPageModule {}
