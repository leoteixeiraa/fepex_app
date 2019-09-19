import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroTrabPipe } from './filtro-trab.pipe';



@NgModule({
  declarations: [FiltroPipe, FiltroTrabPipe],
  exports: [FiltroPipe, FiltroTrabPipe]
})
export class PipesModule { }
