# superhero-api
Esse projeto tem por objetivo atender a demanda no qual foi a mim designada no processo seletivo para a Empresa Vila.

## Versão
Esse projeto utiliza NodeJS 20.12.0

> Sempre que usar esse projeto como base, atualize o NodeJs para versão LTS. 

## Funcionalidades 
Nesse projeto é possível efetuar o CRUD completo de Usuário e Super-Herói, juntamente com seus Atributos e Poderes. Tambem é possível criar uma batalha de super-heróis informando duas Editoras. Para atender a demanda, fiz o uso de algumas ferramentas e tecnologias, como:
* [x] JWT (Gerenciamento de Token para que o sistema possua autenticação)
* [x] Swagger
* [x] TypeORM (ORM para modelagem de Banco de Dados)
* [x] Mongoose
* [X] Request Validators
* [x] ESLint (Ferramenta para manter o código padronizado e evitar erros)
* [x] Express

## Estrutura
O projeto está estruturado em três módulos, sendo eles: 
```
users - authentication - superheroes.
```
Dentro dos módulos, foi estruturado visando o mais fácil entendimento, separando as dtos, infra, repositórios e services.
Também foi criado uma pasta para fazer todo gerenciamento das rotas a fim de deixar o mais desaclopado possível. Todos os endpoints foram autenticados usando o middleware "isAuth", exceto o endpoint POST para criar um novo usuário.

Foi feito a manipulação dos erros utilizando modelos já configurados dentro da pasta "shared". Por exemplo: 
```
throw new NotFound('E-mail não encontrado').
```

## Comandos para rodar o projeto localmente (Docker)
Para rodar o projeto em docker, é necessário rodar o seguinte comando:
```
docker compose up -d
```

## Comandos para rodar o projeto local manualmente
Instalar as dependências
```
npm install
```
Rodar as migrations:
```
npm run migration:run
```
Rodar as seeds (popular o banco):
```
npm run seed
```
Para executar o projeto:
```
npm run dev
```