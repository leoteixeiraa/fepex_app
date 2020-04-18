import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuartaFepexResumosPage } from './quarta-fepex-resumos.page';

const routes: Routes = [
  {
    path: '',
    component: QuartaFepexResumosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuartaFepexResumosPage]
})
export class QuartaFepexResumosPageModule {}
