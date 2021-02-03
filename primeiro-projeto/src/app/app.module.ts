import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';

import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';

@NgModule({
  // listar todos os componentes, diretivas e pipes a serem utilizados no module
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent
  ],
  // outros modules que serão utilzados, ou modules que os componentes necessitam
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule
  ],
  // serviços que ficaram disponíveis para todos os componentes declarados neste module
  providers: [],
  // componente que deve ser instanciado quando o app é iniciado
  bootstrap: [AppComponent],

})
export class AppModule { }
