import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalresumoPage } from './modalresumo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalresumoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalresumoPage],
  exports: [ModalresumoPage]
})
export class ModalresumoPageModule {}
