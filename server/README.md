<h1 align="center">
  <img alt="GoBarber" title="GoBarber" src=".github/gobarber-mustache-icon.png" width="200px" />
</h1>

<h3 align="center">
  GoBarber, agende seus serviços
</h3>

<h4 align="center">
  NodeJS + Docker + Sequelize + Bee queue
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AlexandreMacedoo/gobarber-server?color=%2304D361">

  <a href="https://github.com/AlexandreMacedoo">
    <img alt="Made by Alexandre" src="https://img.shields.io/badge/made%20by-Alexandre-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/AlexandreMacedoo/gobarber-server/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/AlexandreMacedoo/gobarber-server?style=social">
  </a>
</p>

<p align="center">
  <a href="#pré-requisitos">Pré requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>


# gobarber-server
gobarber-server is an application for scheduling services build with Node.js


## Pré requisitos

- Git (https://git-scm.com/)
- Yarn (https://yarnpkg.com/lang/en/)
- Node (https://nodejs.org/en/)
- Docker (https://www.docker.com/products/docker-desktop)
- Rocketseat (https://rocketseat.com.br/starter)

## Instalação
### Clonando o repositório
Com o Git instalado em sua sua máquina, abra o terminal.
Windows -> **cmd** ou **powershell** execute os comandos abaixo:
```ssh
$ git clone https://github.com/AlexandreMacedoo/gobarber-server.git
$ cd gobarber-server
```
### Instalando as dependências
Com o projeto clonado em sua máquina, execute o comando abaixo:

```ssh
$ yarn
```
### Criando os containers
Com o docker instalado e rodando, execute os comandos abaixo:

```ssh
$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:11
$ docker run --name mongo -p 27017:27017 -d -t mongo
$ docker run --name redis -p 6379:6379 -d -t redis:alpine
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

## Consulte a documentação
- Documentação da API - EM BREVE

## License
The gobarber-server is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
