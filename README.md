# Curso-angular

> Repositório destinado a aprendizagem do framework angular

## Comandos úteis para Angular
---

Criar workspace e um projeto inicial:

```sh
ng new <nome-do-projeto>
```

Rodar aplicação:

```sh
ng serve
```

## Componentes
---

Um componente define áreas de responsabilidade na UI que permite reutilizar seus conjuntos de funcionalidades.

Um componente é formado por três coisas:

* Uma classe de componente que lida com dados e funcionalidade
* Um modelo HTML que determina a UI.
* Estilos específicos do componente que definem sua aparência

Criar novo componente:

```sh
ng g c <nome-do-componente>
```

Criar novo componente dentro de um module:

```sh
ng g c <nome-do-module>/<nome-do-componente>
```


### Configurando um componente para receber dados

Dentro da classe do componente, podemos declarar variáveis com dados

```typescript
export class AlgumComponent {

  variavel: string;

  cursos: string[] = ['Java', 'Angular', 'Python', 'NextJS']

  constructor() { 
      this.variavel = "inicia a variavel aqui"
  }

}
```

## Módulos
---
Um módulo é algo feito de componentes, diretivas, serviços, etc. Permite organizar coisas relacionadas.

Criar um novo module:

```sh
ng g m <nome-do-module>
```

## Serviço
---

Um serviço é uma categoria ampla que abrange qualquer valor, função ou recurso de que um app precisa. Um serviço é geralmente uma classe com um propósito estreito e bem definido.

Criar um novo serviço:

```sh
ng g s <nome-do-serviço>
```

### Property Binding

Permite que valores do componente sejam utilizados no template.

Utilização:

```html
[propriedade]="valor"
```
```html
{{dado/expressão}}
```
```html
<select #classe (change) = "0">
   <option value="valor">-</option>
</select>

<div class="alert {{ classe.value }}">
    Esta div irá receber o valor atribuido a classe no select acima
</div>
```

```html
  (evento)="handler"         
```

### Two-way data binding

É utilizado quando queremos que o template e o componente sejam atualizados ao mesmo tempo.
Permite que eventos sejam ouvidos e valores sejam atualizados de forma simultânea, entre componentes pai e filho.

```html
  [(ngModel)]="propriedade"         
```

### Input and Outputs

@Input() e @Output() fornecem a um componente filho uma maneira de se comunicar com seu componente pai. @Input() permite que um componente pai atualize dados no componente filho. Por outro lado, @Output() permite que o filho envie dados a um compoennte pai.

Para usar o @Input() em uma classe de componente filho, deve-se peimreiramente importar o Input e, em seguida, declarar a propriedade com @Input(), como no exemplo a seguir:

```typescript
import { Component, Input } from '@angular/core'; // First, import Input

export class ItemDetailComponent {
  @Input() item: string; // decorate the property with @Input()
}
```

No modelo de componente filho, deve-se adicionar o seguinte:

```html
<p>
  Today's item: {{ item }}
</p>
```

Para configurar o componente pai, deve-se utilizar o seletor do filho como uma diretiva no modelo de componente pai.

```html
<p>
  <app-item-detail [item]="currentItem"></app-item-detail>
</p>
```

Por fim, na classe do componente pai, atribui-se o valor para currentItem:

```typescript
export class AppComponent {
  currentItem = 'Television';
}
```
Com o @Input, o Angular passa o valor do currentItem ao filho para que o item seja renderizado.

## Comandos úteis para Typescript
---

Compilar arquivo em ts (converte para js puro)

```sh
tsc <nome-do-arquivo>.ts
```

Tipagem em TypeScript

```typescript
var n1: string = 'apenas string"
```
```typescript
var n1: int = 'apenas inteiros'
```
```typescript
var n1: any = 'qualquer tipo de dado'
``` 
