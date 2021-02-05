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
  <img [propriedade]="valor"/>
```
```html
  <p> {{dado/expressão}} </p>
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
  <span
    (evento)="handlerS"         
  >
```

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
