import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrabalhosAnterioresResultPage } from './trabalhos-anteriores-result.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalhosAnterioresResultPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrabalhosAnterioresResultPage]
})
export class TrabalhosAnterioresResultPageModule {}
