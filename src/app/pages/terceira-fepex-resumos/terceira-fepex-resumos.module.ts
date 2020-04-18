import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerceiraFepexResumosPage } from './terceira-fepex-resumos.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiraFepexResumosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerceiraFepexResumosPage]
})
export class TerceiraFepexResumosPageModule {}
