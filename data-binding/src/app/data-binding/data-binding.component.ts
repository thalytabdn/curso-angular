import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://thalytabdn.github.io';
  cursoAngular: boolean = true;
  urlImagem = "http://lorempixel.com.br/400/300/?1";

  valorAtualInput: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome:any = 'abc';

  pessoa: any = {
    nome: "Thalyta",
    idade: 21
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
