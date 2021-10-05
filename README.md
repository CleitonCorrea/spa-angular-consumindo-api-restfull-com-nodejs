# Desafio Gazin
SPA em Angular consumindo API RESTFull com Node.js Express e MongoDB

Basicamenta a aplicação consinte em duas camadas: O front que consome os dados da API e o backend aonde esta nossa API

API RESTFULL

A API é uma API REST complete com os verbos GET POST PUT e DELETE

Endpoint principal:

http://localhost/developers/


Pre-requisitos:

Instalação Node.JS: https://nodejs.org/pt-br/download/package-manager/
Intalação do MongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Sugestão: Iniciar a aplicação com a API Json Serve para verificar a execução do CRUD. A segunda aplicação exige instalação e configuração do mongodb e do mongosh

Instruções de Uso:

#Inicializando o Front - Pacote desafioGazin

Comandos a serem executados no terminal:

 - Instalar os pacotes utilizados execute: npm install e/ou npm i
  
 - Instalar Angular CLI : npm install -g @angular/cli     ref https://angular.io/cli
 - Start Project : ng serve
 
 *******************************************************************
 
 #Inicializando a API Json Serve
  
  - Pacote: apiDevelopersGazin
        
        @Json-Serve

Comandos a serem executados no terminal:

 - Instalar os pacotes utilizados execute: npm install e/ou npm i
 - Start Project : json-serve developers.js
 
********************************************************************

#Inicializando API com Node Express e MongoDB
 
 - Pacote: apiNodeExpressGazin
 
        @Express
        @Mongoose (ORM para escreve em um banco de dados MongoDB)
        @Nodemon

Comandos a serem executados no terminal:

- Instalar os pacotes utilizados execute: npm install e/ou npm i
- Start Project : npm run devStart (devStart instrução de scripit adicionado no package.json utilizando nodemon) 


Instruções de uso do mongodb: (Pode utilizar mongosh via shell) : https://docs.mongodb.com/mongodb-shell/ 
Ou abra o terminal com o mongo configurado e execute: mongod 

 OBS: Passos para executar a aplicação com esta API
 
    1° Inicie o banco mongoDB
    2° Inicie a api: npm run devStart
    3° Inicie o front: ng serve

