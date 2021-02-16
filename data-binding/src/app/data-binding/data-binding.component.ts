import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://thalytabdn.github.io';
  cursoAngular: boolean = true;
  urlImagem = "https://images.unsplash.com/photo-1560407560-65eb779bb6c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

  valorAtualInput: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDocurso: string = 'Angular';

  valorInicial = 15;

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtualInput = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
