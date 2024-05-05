# Superhero API
Esse projeto tem por objetivo atender a demanda no qual foi a mim designada no processo seletivo para a Empresa Vila.

## Versão
Esse projeto utiliza NodeJS 20.12.0

> Certifique de estar utilizando a versão acima do NODE na hora de rodar esse projeto. 

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

## Clonar o repositiório
```
git clone https://github.com/wellSantos1334/superhero-api.git
```

## Documentação SWAGGER
```
http://localhost:5555/api/docs/
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
## Implementações AWS
* AWS S3
Fazer a conexão S3 para fazer a manipulação dos fotos de perfil do usuário
```
const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});
```
* AWS EC2
  
1. Acessar o AWS EC2 e criar uma máquina para ser seu servidor;
2. Criar uma chave de acesso, isso irá gerar um arquivo que será necessário para autenticar seu acesso na hora de conectar o servidor;
3. Configurar o SSH;
4. Acessar o computador da AWS e instalar o Node de acordo com a versão necessária para o projeto;
5. Dar o git clone dentro do servidor, para instalar o projeto;
6. Instalar os pacotes (npm install);
7. Pronto, o servidor estará preparado para rodar o projeto.

## Melhorias futuras
* Adicionar testes em todas as funcionalidades do sistema;
* Adicionar funções de disparo de e-mail juntamente com "esqueceu senha" no módulo de usuário;
* Conectar com AWS S3 para que não fique salvando a imagem de perfil do usuário no servidor.



