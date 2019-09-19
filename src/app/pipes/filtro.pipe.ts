import { Pipe, PipeTransform } from '@angular/core';
import { Sexta } from '../interfaces/sexta';
import { SextaService } from '../services/sexta.service';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(sextas: Sexta[], texto: string): Sexta[] {


    if (texto.length === 0) { return sextas; }

    texto = texto.toLocaleLowerCase(); //passar minusculas e maiusculas


    return sextas.filter(sexta => {
      console.log(sexta.title.toLocaleLowerCase());
      console.log(sexta.title.toLocaleLowerCase().includes(texto));
      return sexta.title.toLocaleLowerCase().includes(texto);
    });

  }

}
