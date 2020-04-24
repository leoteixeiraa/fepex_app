import { Pipe, PipeTransform } from '@angular/core';
import { TrabalhoAnterior } from '../interfaces/trabalho_anterior';


@Pipe({
  name: 'filtro'
})
export class FiltroTrabAnterioresPipe implements PipeTransform {

  transform(trabalhos: TrabalhoAnterior[], texto: string): TrabalhoAnterior[] {

    console.log(texto);
    

    
    if (texto.length === 0) { return trabalhos; }

    texto = texto.toLocaleLowerCase(); //passar minusculas e maiusculas


    return trabalhos.filter(trabalho => {
      console.log(trabalho.titulo.toLocaleLowerCase());
      console.log(trabalho.titulo.toLocaleLowerCase().includes(texto));
      return trabalho.titulo.toLocaleLowerCase().includes(texto);
    });

  }

}
