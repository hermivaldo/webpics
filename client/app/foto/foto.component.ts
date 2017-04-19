// alurapic/client/app/foto/foto.component.ts

import { Component, Input } from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './app/foto/foto.component.html',
})
export class FotoComponent{
   @Input() titulo : string;
   @Input() url : string;
   descricao: string;
}