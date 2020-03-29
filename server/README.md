<h1 align="center">
  <img alt="figaros" title="figaros" src="../.github/figaros-mustache-icon.png" width="200px" />
</h1>

<h3 align="center">
  Figaro's server - Api for web and mobile applications
</h3>

<h4 align="center">
  NodeJS + Docker + Sequelize + Bee queue
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AlexandreMacedoo/figaros?color=%2304D361">

  <a href="https://github.com/AlexandreMacedoo">
    <img alt="Made by Alexandre" src="https://img.shields.io/badge/made%20by-Alexandre-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/AlexandreMacedoo/figaros/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/AlexandreMacedoo/figaros?style=social">
  </a>
</p>

<p align="center">
  <a href="#pré-requisitos">Pré requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>


# Figaro's server
Figaro's server is an api for scheduling services build with Node.js


## Pré requisitos

- Git (https://git-scm.com/)
- Yarn (https://yarnpkg.com/lang/en/)
- Node (https://nodejs.org/en/)
- Docker (https://www.docker.com/products/docker-desktop)

## Instalação
### Instalando as dependências
Com o projeto clonado em sua máquina, execute o comando abaixo:

```ssh
$ yarn
```
### Criando os containers
Com o docker instalado e rodando, execute os comandos abaixo:

```ssh
$ docker run --name postgres-figaros -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:11
$ docker run --name mongo-figaros -p 27017:27017 -d -t mongo
$ docker run --name redis-figaros -p 6379:6379 -d -t redis:alpine
```
#### Para visualizar se os containers estão rodando, execute o comando:

```ssh
$ docker ps
```
### Rodando as migrations
Com os containers rodando, execute o comando:

```ssh
$ yarn sequelize db:migrate
```
### Executando
Após instalar todas as dependências, execute o comando:

```ssh
$ yarn dev
```
### Acesse a API
(http://localhost:3333/home)

## Endpoints
Routes:

Method | Endpoint | Controller | Action | Authentication
--- | --- | --- | --- | ---
POST   | /users                             | \src\app\controllers\UserController                   | store      | no
PUT    | /users                             | \src\app\controllers\UserController                   | update     | yes
POST   | /sessions                          | \src\app\controllers\SessionController                | store      | no
POST   | /files                             | \src\app\controllers\FileController                   | store      | yes
GET    | /providers                         | \src\app\controllers\ProviderController               | all        | yes
GET    | /providers/{id}/available          | \src\app\controllers\AvailableController              | all        | yes
POST   | /appointments                      | \src\app\controllers\AppointmentController            | store      | yes
GET    | /appointments                      | \src\app\controllers\AppointmentController            | all        | yes
DELETE | /appointments/{id}                 | \src\app\controllers\AppointmentController            | destroy    | yes
GET    | /schedules                         | \src\app\controllers\ScheduleController               | all        | yes
GET    | /notifications/{id}                | \src\app\controllers\NotificationController           | index      | yes
PUT    | /notifications/{id}                | \src\app\controllers\NotificationController           | update     | yes

## Consulte a documentação
- Documentação da API - EM BREVE
