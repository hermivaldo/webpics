// alurapic/client/app/app.component.ts


import { Http } from '@angular/http';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
})
export class AppComponent{
    
    fotos: Array<Object>;
    
    constructor(http: Http){
        http.get("v1/fotos")
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }
}