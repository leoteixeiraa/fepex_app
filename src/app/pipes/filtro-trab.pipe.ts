import { Pipe, PipeTransform } from '@angular/core';
import { Trabalho } from '../interfaces/trabalho';


@Pipe({
  name: 'filtro'
})
export class FiltroTrabPipe implements PipeTransform {

  transform(trabalhos: Trabalho[], texto: string): Trabalho[] {


    if (texto.length === 0) { return trabalhos; }

    texto = texto.toLocaleLowerCase(); //passar minusculas e maiusculas


    return trabalhos.filter(trabalho => {
      console.log(trabalho.title.toLocaleLowerCase());
      console.log(trabalho.title.toLocaleLowerCase().includes(texto));
      return trabalho.title.toLocaleLowerCase().includes(texto);
    });

  }

}
