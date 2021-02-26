### Instruções Gerais

Ele é dividido em duas etapas. A primeira, chamada de "Nosso Jogo", refere-se a uma versão reduzida e bem mais simples do blackjack. A segunda, chamada de "Desafio", pretende aproximar o nosso projeto do jogo original.


Uma versão deste exercício está implementada no link abaixo:

**NÃO** é para implementar a parte visual do site (html). Fizemos apenas para demonstração.

Dica: para ver as impressões do `console.log` , você pode utilizar a função de **inspecionar** (inspect).


### NOSSO JOGO

Resolva esta etapa no arquivo `nossoJogo.js`

**Regras do jogo 📖**

As regras do jogo são as seguintes:

- Existem 2 jogadores: o usuário e o computador.
- Os jogadores usam um baralho com muitas cartas. As cartas têm um número (A, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,J ,Q ,K) e um naipe (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)). Por exemplo, uma carta do baralho é o dois de Paus (2♣️). Existem 52 possibilidades de cartas diferentes (13 números e 4 naipes).
- Os jogadores compram cartas do baralho. Ao comprar uma carta do baralho, ela pode ser de qualquer uma das 52 cartas, com probabilidade igual.
- As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9). As cartas J, Q e K tem valor 10, e a carta A tem valor 11.
- O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. A pontuação de cada jogador é a soma do valor das suas cartas.
- O jogador com a maior pontuação ganha a rodada.

**Montando o jogo 🎰** 

Essa etapa do projeto consiste em criar um programa que:

1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".

- Dica (clique para ver)

3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".

4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada. 

**Começando uma rodada 🃏**

A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.

5 - Nós preparamos um método que permite sortear uma carta. Ela vem com um **texto** que representa o que é escrito na carta; e um **valor** que mostra a pontuação da carta. 

- Dica (clique para ver)

6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo

```jsx
"Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
"Computador - cartas: Q♣️ 10♣️  - pontuação 20"
```

7 - Além disso, deve indicar o vencedor ou um empate

```jsx
"Empate!"
"O usuário ganhou!"
"O computador ganhou!"
```
<br/><br/>


- **DESAFIOS**
    - Dicas Gerais (clique para ver)
        - As cartas dos jogadores (usuário e computador) podem ser armazenadas em  `array`.
        - Faça cada etapa com calma! Teste bem; e utilize bastante o site fornecido para se basear

    Resolva esta etapa no arquivo `desafio.js`

    Lembre de comentar o link para o script do `nossoJogo.js` enquanto faz o desafio!

    O desafio consiste em adicionar regras ao jogo, mantendo as originais. Faça na ordem solicitada.

    8 - Se as duas cartas iniciais do usuário ou do computador forem dois ases (`A`), as cartas devem ser sorteadas novamente.

    9 - Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuando sendo reveladas. A primeira carta do computador é revelada, a segunda é oculta por enquanto. Você deve perguntar ao usuário se ele deseja comprar mais uma carta. Veja abaixo:

    ```jsx
    confirm(
    	"Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️." +
    	"\n"+  // \n faz pular a linha
    	"Deseja comprar mais uma carta?"
    )

    /*

    Este confirm resulta na mensagem:

    	Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️.
    	Deseja comprar mais uma carta?

    */
    ```

    10 - A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu. Veja abaixo, uma sequência possível de mensagens mostradas ao usuário (usando `confirm` e `alert`)

    - Dica

        Os `confirm` devem ser utilizados quando as mensagem são perguntas. Quando formos só mostrar uma informação ao usuário, vamos utilizar o `alert` (como, por exemplo, ao mostrar quem ganhou o jogo)

        ```jsx
        alert(
        "Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22.\n" +
        "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20.\n" +
        "O computador ganhou!"
        )
        ```

    ```jsx
    "Quer iniciar uma nova rodada?"
    /* Responde *ok* */

    "Suas cartas são 3♣️ J♥️. A carta revelada do computador é Q♠️."
    "Deseja comprar mais uma carta?"
    /* Responde *ok* */

    "Suas cartas são 3♣️ J♥️ 5♣️ . A carta revelada do computador é Q♠️." 
    "Deseja comprar mais uma carta?"
    /* Responde *ok* */

    /* Mensagem de fim de jogo */
    "Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22."
    "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20." 
    "O computador ganhou!"
    ```

    11 - **Quando** o jogador **parar** de comprar cartas (Ter clicado `cancel` ao receber a pergunta "**Deseja comprar mais uma carta?**") **e** tiver a pontuação **menor** ou igual a 21, inicia-se a rodada do computador. Ele deverá comprar cartas até que sua pontuação seja igual ou superior a do usuário. Veja abaixo, uma sequência possível de mensagens mostradas ao usuário.

    ```jsx
    "Quer iniciar uma nova rodada?"
    /* Responde *ok* */

    "Suas cartas são 2♥️ 6♥️. A carta revelada do computador é J♦️." 
    "Deseja comprar mais uma carta?"
    /* Responde *ok* */

    "Suas cartas são 2♥️ 6♥️ 10♠️ . A carta revelada do computador é J♦️." 
    "Deseja comprar mais uma carta?"
    /* Responde *cancel* */

    /* Mensagem de fim de jogo */
    "Suas cartas são 2♥️ 6♥️ 10♠️ . Sua pontuação é 18." 
    "As cartas do computador são J♦️ 5♣️ 8♣️. A pontuação do computador é 23." 
    "O usuário ganhou!"
    ```

    12 - Se a pontuação do usuário for maior que 21, ele perde o jogo. Se a pontuação do computador for maior que 21 (e a do usuário não for), o usuário ganha o jogo.  Se as pontuações do usuário e do computador forem iguais, o jogo termina em empate.