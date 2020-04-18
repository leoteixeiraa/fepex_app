import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuartaFepexArtigosPage } from './quarta-fepex-artigos.page';

const routes: Routes = [
  {
    path: '',
    component: QuartaFepexArtigosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuartaFepexArtigosPage]
})
export class QuartaFepexArtigosPageModule {}
