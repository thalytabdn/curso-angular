import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  //permite que os componentes sejam exibidos em outros modulos
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
