/***Exercícios de interpretação de código**

1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    ```jsx
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3
    console.log("b. ", resultado)

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)

    Respostas:

    a. ---> false
    b. ---> false
    c. ---> false
    d. ---> boolean

    ```*/

/*
    2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    ```jsx
    let array
    console.log('a. ', array)
    
    array = null
    console.log('b. ', array)
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
    
    let i = 0
    console.log('d. ', array[i])
    
    array[i+1] = 19
    console.log('e. ', array)
    
    const valor = array[i+6]
    console.log('f. ', valor)

    a. ---> undefined
    b. ---> null
    c. ---> 11
    d. ---> 0
    e. ---> 1, 19
    f. ---> 1, 19, 6
```
    */



  //Exercícios de escrita de código 1

  const idade = console.log(parseInt("Qual é a sua idade: "));  
  const idadeAmigo = console.log(parseInt("Qual a idade do seu melhor amigo: "));
  
  const comparacao = idade > idadeAmigo;
  
  console.log("A sua idade é maior que a do seu melhor amigo? ", comparacao);
  
  console.log("A diferença de sua idade para com seu amigo é: ", idade - idadeAmigo);
  


  //Exercícios de escrita de código 2

 const par = console.log (parseInt(" Informe um número par qualquer: "));
 
 const divisao = par / 2;
 
 console.log("O resultado da divisão é: ");
 
 //Informações observadas:

 //c- Todo número par dividido pelo numeral 2 resulta em 0. 
 //d- Qualquer número ímpar divido pelo numeral 2, possui resto 0.5



  //Exercícios de escrita de código 3
 
 const listaTarefas = [];
 
 const tarefa1 = console.log("Informe a sua tarefa de maior prioridade para o dia: ");
 
 const tarefa2 = console.log("Informe a sua tarefa de média prioridade para o dia: ");
 
 const tarefa3 = console.log("Informe a sua tarefa de menor prioridade para o dia: ");
 
 listaTarefas = tarefa1;
 listaTarefas = tarefa2;
 listaTarefas = tarefa3;
 
console.log("Sua lista de tarefas é: ", listaTarefas);
 
 
 
 //Exercícios de escrita de código 4

 const nomeUsuario = console.log("Informe o seu nome: ");
 
 const emailUsuario = console.log("Informe o seu email: ");
 
 console.log("O e-mail", emailUsuario +  "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeUsuario + "!");
