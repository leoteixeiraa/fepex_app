import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimeiraFepexPage } from './primeira-fepex.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiraFepexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimeiraFepexPage]
})
export class PrimeiraFepexPageModule {}
