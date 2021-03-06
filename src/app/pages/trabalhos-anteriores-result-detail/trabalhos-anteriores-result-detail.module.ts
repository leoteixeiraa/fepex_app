import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrabalhosAnterioresResultDetailPage } from './trabalhos-anteriores-result-detail.page';
import { ModalresumoPage } from '../modalresumo/modalresumo.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalhosAnterioresResultDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrabalhosAnterioresResultDetailPage, ModalresumoPage],
  entryComponents: [ModalresumoPage]
})
export class TrabalhosAnterioresResultDetailPageModule {}
