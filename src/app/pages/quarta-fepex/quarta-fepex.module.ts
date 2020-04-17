import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuartaFepexPage } from './quarta-fepex.page';

const routes: Routes = [
  {
    path: '',
    component: QuartaFepexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuartaFepexPage]
})
export class QuartaFepexPageModule {}
