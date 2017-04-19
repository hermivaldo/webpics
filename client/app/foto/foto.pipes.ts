import { FotoComponent } from './foto.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    
    transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {
        if (!fotos) return [];
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }

}

