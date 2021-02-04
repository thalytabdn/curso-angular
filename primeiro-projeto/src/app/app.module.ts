import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

@NgModule({
  // listar todos os componentes, diretivas e pipes a serem utilizados no module
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
  ],
  // outros modules que serão utilzados, ou modules que os componentes necessitam
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  // serviços que ficaram disponíveis para todos os componentes declarados neste module
  providers: [
    CursosService
  ],
  // componente que deve ser instanciado quando o app é iniciado
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
