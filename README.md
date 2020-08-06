# Next Level Week #2 - Proffy :purple_heart:
![alt text](https://github.com/jean-vr/next-level-week-2/blob/master/about/images/proffy.png)

## Sobre o projeto
O projeto consiste em aplicar conhecimentos de back-end e front-end utilizando como tema uma plataforma online de ensino. A interface foi construída com um "ar" de rede 
social, dando um aspecto moderno e amigável para o usuário.

O projeto foi desenvolvido com base em 3 pontos principais:
  * Construção de uma interface responsiva utilizando como técnica principal o "mobile first"
  * Construção de um ambiente back-end para o armazenamento de dados e tratamento de requisições
  * Desenvolvimento desta mesma aplicação em uma versão mobile

### Funcionalidades principais
  * Registro de usuário como professor, abrangendo tanto registro de informações básicas (e.g. nome, avatar...) como sobre as aulas (e.g. matéria, horário...)
  * Listagem dos professores disponíveis na plataforma baseado na matéria de ensino e sua disponibilidade em um determinado dia da semana
  * Possibilidade de contatar o professor via WhatsApp e contagem do número de contatos feitos (mostrado como total de conexões na página inicial)

## :rocket: Tecnologias
  * [ReactJS](https://reactjs.org/)
  * [Node.js](https://nodejs.org/en/)
  * [TypeScript](https://www.typescriptlang.org/)
  * [React Native](https://reactnative.dev/)

## :memo: Dependências principais
  **Server (Node.js)**
   * express
   * cors
   * knex
   * sqlite3
   
 **Web (ReactJS)**
   * react
   * react-dom
   * react-router-dom
   * react-scripts
   * typescript
   
 ## Como utilizar
 ```
 # Clone este repositório
 $ git clone https://github.com/jean-vr/next-level-week-2.git
 
 # Vá para a pasta de cada programa e instale as dependências
 
 # Para o projeto server
 $ cd server
 $ npm i 
 $ npm run knex:migrate 
 $ npm start
 
 # Para o projeto web
 $ cd web
 $ npm i
 $ npm start
 
 ```
 
 ## Agradecimentos
 Agradeço à equipe da Rocketseat pela oportunidade de participar de um evento com tamanha quantidade de conhecimentos e técnicas que ajudam o promagador a avançar cada
 vez mais em sua jornada.
