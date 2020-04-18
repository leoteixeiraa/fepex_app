import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerceiraFepexArtigosPage } from './terceira-fepex-artigos.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiraFepexArtigosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerceiraFepexArtigosPage]
})
export class TerceiraFepexArtigosPageModule {}
