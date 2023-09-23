# Nosso primeiro projeto em REACTJS

Pagina Web para um petshop

## Configurando nosso projeto

### `npm install react-scripts --save`
para rodar a primeira vez o projeto, é necessario rodar o comando:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`
Para rodar nosso servidor com os dados da API, rodaremos o comando a cima, ele ira abrir uma nova porta em [http://localhost:5000](http://localhost:5000) 


### `npm i react-router-dom`

Para a criação das nossas rotas, estamos utilizando a biblioteca do react router dom

### `npm i json-server`

Para rodar a API iremos utilizar o json server 

Para executar nosso servidor ultilizamos o codigo `npx json-server --watch db.json --port 5000` , direcionando ele para a porta 5000 

### `npm i axios`

Para consumir os dados da nossa API, iremos utilizar a biblioteca do axios