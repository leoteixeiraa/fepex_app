import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundaFepexArtigosPage } from './segunda-fepex-artigos.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaFepexArtigosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundaFepexArtigosPage]
})
export class SegundaFepexArtigosPageModule {}
