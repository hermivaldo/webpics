import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'cadastro',
  templateUrl: './app/cadastro/cadastro.component.html',
})
export class CadastroComponent  {
    
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;

    constructor(http: Http, fb: FormBuilder){
        this.http = http;

        this.meuForm = fb.group({

            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar (event) {
        event.preventDefault();
        console.log(this.foto);

        var headers = new Headers();
        headers.append("Content-Type", 'application/json');

        this.http.post("v1/fotos", JSON.stringify(this.foto), {headers: headers})
        .subscribe(() => {
            this.foto = new FotoComponent();
            console.log("Foto Salva com Sucesso");
        }, erro => console.log(erro));
    }
}