### Enunciado

Os exercícios de hoje são divididos em interpretação e escrita de código. Para os de interpretação, coloque as respostas em comentários de código. Já, nos de escrita, lembre-se de imprimir no console os resultados.

**ATENÇÃO**
Não é permitido utilizar estruturas e sintaxes de código ainda não ensinadas no curso. Para um melhor aproveitamento para si mesmo, force-se a utilizar só o que foi passado a vocês.

**Exercícios de interpretação de código**

1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    a = 10
    b = 10

    console.log(b)

    b = 5
    console.log(a, b)
    ```

2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    a = 10
    b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)
    ```

**Exercícios de escrita de código**

1. Construa um programa, seguindo os seguintes passos:

    a) Declare uma variável para armazenar um nome, sem atribuir um valor.

    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

    d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

    Dica: se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

    e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

    f) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

    Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
    `console.log(valor1, valor2)`

2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:

    ```
    1. Qual o seu endereço?
    Resposta: Rua ABC, 123

    2. Qual a sua cor favorita?
    Resposta: Azul
    ```

3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima na tela o array completo

    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    ```
    "Você está usando uma roupa azul hoje?" true
    ```