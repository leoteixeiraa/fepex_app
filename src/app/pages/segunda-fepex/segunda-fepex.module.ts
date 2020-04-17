import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundaFepexPage } from './segunda-fepex.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaFepexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundaFepexPage]
})
export class SegundaFepexPageModule {}
