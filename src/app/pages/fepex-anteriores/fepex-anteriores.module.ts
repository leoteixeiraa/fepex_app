import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FepexAnterioresPage } from './fepex-anteriores.page';

const routes: Routes = [
  {
    path: '',
    component: FepexAnterioresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FepexAnterioresPage]
})
export class FepexAnterioresPageModule {}
