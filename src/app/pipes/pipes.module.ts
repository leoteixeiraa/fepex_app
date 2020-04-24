import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroTrabPipe } from './filtro-trab.pipe';
import { FiltroTrabAnterioresPipe } from './filtro-trab.anteriores.pipe';



@NgModule({
  declarations: [FiltroPipe, FiltroTrabPipe, FiltroTrabAnterioresPipe],
  exports: [FiltroPipe, FiltroTrabPipe, FiltroTrabAnterioresPipe]
})
export class PipesModule { }
