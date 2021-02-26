/* Exercício de interpretação de código
EXERCÍCIO 1

O que o código abaixo está fazendo? Qual o resultado impresso no console?

```jsx
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
```

Resposta:
O programa está inicilizando a variável valor em 0 e atribuindo a mesma a condição de repetição inferior a 5 com incremento para alcansar a condição estabelecida no laço para o índice. 
O índice está apontando para o número de vezes que a passagem se repetirá e não para o valor em si. 
Ocorre que em cada passagem determinada para este, o valor da variável está sendo acrescido do valor atual + o estabelecido par a quantidade de passagens no laço.

Sendo assim, será impresso:

0
1
3
6
10
*/


/* EXERCÍCIO 2

Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a. O que vai ser impresso no console?

b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?


Resposta:

a- Será impresso os valores:

19
21
23
25
27
30


b-


*/