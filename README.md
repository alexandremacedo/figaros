<h1 align="center">
  <img alt="Figaros" title="Figaros" src=".github/figaros-mustache-icon.png" width="200px" />
</h1>

<h3 align="center">
  Figaro's - Schedule your services
</h3>

<h4 align="center">
  NodeJS + ReactJS + React Native
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
  <a href="#required">Required</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalation">Instalation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

# figaros
Figaro's is a project built with NodeJS + ReactJS + React Native for scheduling services

## Required
- Git (https://git-scm.com/)
- Yarn (https://yarnpkg.com/lang/en/)
- Node (https://nodejs.org/en/)
- Docker (https://www.docker.com/products/docker-desktop)

## Instalation
### Cloning the repository
With Git installed, open the terminal.
Windows -> **cmd** or **powershell** run the commands below:
```ssh
$ git clone https://github.com/AlexandreMacedoo/figaros.git
$ cd figaros
```
### :mailbox: Starting server
[ReadME](https://github.com/AlexandreMacedoo/figaros/tree/master/server) contains all the steps to configure server
```ssh
$ cd server
```
#### Endpoints
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

### :iphone: Starting mobile application
[ReadME](https://github.com/AlexandreMacedoo/figaros/tree/master/mobile) contains all the steps to configure the mobile application
```ssh
$ cd mobile
```
### :computer: Starting web application
[ReadME](https://github.com/AlexandreMacedoo/figaros/tree/master/web) contains all the steps to configure the web application
```ssh
$ cd web
```

## License
The figaros is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
