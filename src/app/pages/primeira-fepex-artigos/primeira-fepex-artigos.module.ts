import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimeiraFepexArtigosPage } from './primeira-fepex-artigos.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiraFepexArtigosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimeiraFepexArtigosPage]
})
export class PrimeiraFepexArtigosPageModule {}
