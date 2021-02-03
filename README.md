# Curso-angular

> Repositório destinado a aprendizagem do framework angular

## Comandos úteis para Angular
---

Criar workspace e um projeto inicial:

```sh
ng new <nome-do-projeto>
```

Criar novo componente:

```sh
ng g c <nome-do-componente>
```

Criar um novo module:

```sh
ng g m <nome-do-module>.ts
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

### Configurando um componente para receber dados

Primeiramente é necessário importar Input de @angular/core:

```typeschipt
import { Input } from '@angular/core';
```

## Módulos
---
Um módulo é algo feito de componentes, diretivas, serviços, etc. Permite organizar coisas relacionadas

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
