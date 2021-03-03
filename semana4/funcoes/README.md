EXERCÍCIO 1  -------------concluso

Leia o código abaixo:

```jsx
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

a. O que vai ser impresso no console?

b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 



EXERCÍCIO 2  -------------concluso

Leia o código abaixo:

```jsx
let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)
```

a. Explicite quais são as saídas impressas no console

b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?



EXERCÍCIO 3  -------------concluso

O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

```jsx
	const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}
```




**Exercícios de escrita de código**

EXERCÍCIO 4

Escreva as funções explicadas abaixo:

a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem.

b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.
```

EXERCÍCIO 4

Escreva as funções explicadas abaixo:

a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem.

b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.
```

- Exemplo

    Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `true`, deve retornar:

    `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou estudante."`



EXERCÍCIO 5

Escreva as funções explicadas abaixo:

a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)


EXERCÍCIO 6

Para os itens a seguir, considere o seguinte array para os seus testes:

```jsx
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
```

a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
