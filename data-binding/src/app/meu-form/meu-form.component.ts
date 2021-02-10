import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent{
  nome:any = 'abc';

  pessoa: any = {
    nome: "João",
    idade: 18
  }

  getPessoa(){
    return this.pessoa;
  }
  constructor() { }

}
