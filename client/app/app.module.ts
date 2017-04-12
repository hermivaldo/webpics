// alurapic/client/app/app.module.ts
import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule{}