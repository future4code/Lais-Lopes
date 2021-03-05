Leia os tópicos abaixo na ordem:

- **BOILERPLATE** para o exercício de hoje

    Use o seguinte boilerplate para fazer o exercício do dia:

    [boilerplate.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2bfc74eb-9466-4e68-a2bf-5a1ef03462cc/boilerplate.zip)

- **ENUNCIADO**

    Atualmente, estamos vendo vários tipos de bancos digitais surgindo, cada um com as suas próprias vantagens e desvantagens. Entretanto, todos eles oferecem algo em comum: uma alternativa de banco que permita gerenciar sua conta sem sair de casa, através de plataformas web e/ou mobile. Neste exercício, estamos propondo que vocês criem um funcionamento importante para eles: um local onde os usuários consigam cadastrar suas despesas e vê-las, de uma maneira fácil. 

    Além disso, como desenvolvedores e desenvolvedoras, uma coisa que será comum na vida de vocês será trabalhar com projetos já em andamento. Ou seja, trabalhar com códigos já existentes, em que vocês precisarão interpretar o código já feito por outras pessoas e implementar novas linhas. A ideia do exercício de hoje será reproduzir um pouco desse cenário. 

    Por isso, disponibilizamos um boilerplate para que vocês possam fazer o exercício. Ele já possui todo o HTML implementado e parte do javascript (caso você não tenha visto, esse boilerplate está disponível no tópico anterior, um pouquinho mais pra cima ☝️). 

    O fluxo básico do sistema bancário é composto de 1 tela, dividida em 3 seções:

    - A primeira seção é uma de **cadastro da despesa.** Ela solicita do usuário 3 informações:
        - **valor** (em reais);
        - **tipo da despesa** (em um *dropdown* para ele selecionar). Há 3 tipos de despesa: "Alimentação", "Utilidades", "Viagem";
        - **campo de descrição**.

    - A segunda seção é uma de **filtro** de todas as **despesas**. Ela, a princípio, mostra o **valor**, a **descrição** e o **tipo de gasto** de todas as despesas, mas permite que o usuário **FILTRE** a lista, sob os seguintes critérios: **tipo de gasto**; **valor máximo** e **valor mínimo**.

    - A terceira seção é uma tela de **extrato**. Nela, só importam os **tipos dos gastos** e seus **valores**. Não é possível realizar uma filtragem dos dados. Deve haver um campo que mostre o total gasto pelo usuário.

    Como dito, o boilerplate que disponibilizamos pra vocês já possui essas três seções criadas. Porém, as funcionalidades de cada seção precisam ser implementadas, a partir da criação de funções de arrays vistas na aula de hoje.

    Se vocês repararem, o arquivo javascript também já possui bastantes implementações, restando apenas a criação das funções de array (que vocês aprenderam hoje) em pontos específico do código. Mas para que essas funções sejam criadas, é necessário que vocês, antes de tudo, entendam o código que já existe, para depois criar o código que falta para fazer tudo funcionar. 

    Por isso, o exercício de hoje terá duas partes: 

    - **A primeira parte**, de leitura e interpretação do código que existe
    - **A segunda**, de implementação das funções de array para que o sisteminha de cadastro de despesas funcione.

    Vamos lá?