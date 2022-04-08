# Reserve.io - Server

![reserve.io](https://img.shields.io/badge/JefersonLucas-reserve.io-brightgreen?style=flat)
![Created Badge](https://badges.pufler.dev/created/JefersonLucas/reserve.io-server?style=flat)
![Updated Badge](https://badges.pufler.dev/updated/JefersonLucas/reserve.io-server?style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/JefersonLucas/reserve.io-server?style=flat)
![MIT](https://img.shields.io/github/license/JefersonLucas/reserve.io-server?style=flat)

![Node.js](https://img.shields.io/badge/-Node.js-21262d?style=flat-square&logo=node.js&logoColor=509941)
![TypeScript](https://img.shields.io/badge/-TypeScript-21262d?fff&style=flat-square&logo=typescript)
![Express](https://img.shields.io/badge/-Express-21262d?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/-MongoDB-21262d?style=flat-square&logo=mongodb)
![JWT](https://img.shields.io/badge/-JWT-21262d?style=flat-square&logo=jsonwebtokens&logoColor=fb015b)
![Yarn](https://img.shields.io/badge/-Yarn-21262d?fff&style=flat-square&logo=yarn)
![EditorConfig](https://img.shields.io/badge/-EditorConfig-21262d?style=flat-square&logo=editorconfig)
![ESLint](https://img.shields.io/badge/-ESLint-21262d?style=flat-square&logo=eslint&logoColor=4b32c3)
![Prettier](https://img.shields.io/badge/-Prettier-21262d?style=flat-square&logo=prettier)
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-21262d?fff&style=flat-square&logo=visual-studio-code&logoColor=007ACC)

## About

Reserve.io is an application for equipment reservations, making it possible to **create**, **read**, **update** and **delete** reservations.

The purpose of this application is to help maintain a workflow for reservations and evolve an old personal project that had the same goal.

This new project has a very ambitious goal of trying to use modern technologies, in addition to applying techniques and evolving personally and professionally.

Throughout this documentation I will list the technologies, architectures, structure and workflows used in this project.

I am trying my best to be the most declarative in the codes kept here, if you find any syntax error or unwanted operation, forgive me.

Att.,

Jeferson Lucas

## Starting

These instructions will provide a copy of the project running on your local machine.

### Installing

Follow step by step the following ways to obtain the code on your local machine.

1. Start the repository on your local machine using the following command lines.

```bash
mkdir reserve.io

cd reserve.io

git init

git clone git@github.com:JefersonLucas/reserve.io-server.git
# or
git clone https://github.com/JefersonLucas/reserve.io-server.git
```

The files that are in the remote repository are now cloned into the local repository.

### Starting Server

1. Install the required `server/` dependencies:

```bash
cd server/

npm install
# or
yarn install
```

2. Start the client on the port [localhost:3333](http://localhost:3333)

**Obs.**: Make sure you have the `.env` file and set the `PORT` key to be able to load the application.

```bash
npm dev
# or
yarn dev
```

## Creating requisitions

To create HTTP requests use some API client to perform your tests and debugs like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

This application has the following endpoints:

**/users**:

- **POST**: `/users/register` - For creating users.

  - example: http://localhost:3333/users/register/

  ```json
  {
    "username": "Jeferson Lucas",
    "email": "jeferson@me.com",
    "password": "12345",
    "confirm_password": "12345"
  }
  ```

  - return:

  ```json
  {
    "id": "622bade825344a881e173013",
    "username": "Jeferson Lucas",
    "email": "jeferson@me.com"
  }
  ```

  - Authorization: This route **does not needs authorization**.

  - Validation: This route has validation of: **username**, **email**, **password**, **confirm password**, and if the **passwords match** and if **an email address already exists**. It also has a **hashed password**.

- **POST**: `/users/login` - For user login.

  - example: http://localhost:3333/users/login/
 
  ```json
  {
    "email": "jeferson@me.com",
    "password": "12345"
  }
  ```

  - return:

  ```json
  {
    "id": "622bade825344a881e173013",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZGU4MjUzNDRhODgxZTE3MzAxNCIsImlhdCI6MTY0NzA0NTYxN3.XsJhXqEAcxU15usts8OYyPi2NFgm0N6OI-X-4QPgIhc"
  }
  ```

  - Authorization: This route **does not needs authorization**.

  - Validation: This route has validation of: **email**, **password** and if the **user exists**.

- **GET**: `/users/` (**need authorization**) - For consultation of registered users.

  - example: http://localhost:3333/users/
  
  - return:

  ```json
  [
    {
      "id": "622bade825344a881e173013",
      "username": "Jeferson Lucas",
      "email": "jeferson@me.com"
    },
    {
      "id": "622bade825344a881e173014",
      "username": "Lucas Jeferson",
      "email": "lucas@me.com"
    },
    ... More users
  ]
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route **needs authorization**.

- **GET**: `/users/:id` (**need authorization**) - For registered user inquiry.

  - example: http://localhost:3333/users/622bade825344a881e173013

  - return:

  ```json
  {
    "id": "622bade825344a881e173013",
    "username": "Jeferson Lucas",
    "email": "jeferson@me.com"
  }
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route validates if the **user exists**.

- **PUT**: `/users/update/:id` (**need authorization**) - To update registered user.

  - example: http://localhost:3333/users/update/622bade825344a881e173013

  ```json
  {
    "username": "Lucas Jeferson",
    "email": "lucas@me.com",
    "password": "#12345"
  }
  ```

  - return:

  ```json
  {
    "id": "622bade825344a881e173013",
    "username": "Jeferson Lucas",
    "email": "jeferson@me.com"
  }
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route **needs authorization**. This route validates **username**, **email**, **password** and **username exists**.

- **DELETE**: `/users/delete/:id` (**need authorization**) - To remove registered user.

  - example: http://localhost:3333/users/delete/622bade825344a881e173013

  - return:

  ```json
  {
    "message": "usuário removido."
  }
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route **needs authorization**. This route does **user** validation;

  
**/reservations**:

- **POST**: `/reservations/register` (**need authorization**) - For creating reservation.

  - example: http://localhost:3333/reservations/register/

  ```json
  {
    "requester": "Jeferson Lucas",
    "equipment": "Notebook",
    "status": "waiting",
    "date": "1994-07-12",
    "place": "C1",
    "entry_time": "08:00",
    "exit_time": "14:20",
    "observation": ""
  }
  ```

  - return:

  ```json
  {
    "id": "624f84ef785defc1e467f903",
    "requester": "Jeferson Lucas",
    "equipment": "Notebook",
    "status": "waiting",
    "date": "1994-07-12",
    "place": "C1",
    "entry_time": "08:00",
    "exit_time": "14:20",
    "observation": ""
  }
  ```

  - Authorization: This route **requires authorization**.

  - Validation: This route has validation of: **requester**, **equipment**, **status**, **place**, **entry_time** and **exit_time**. The **observation** value is optional.

- **GET**: `/reservations/` (**need authorization**) - For consultation of registered reservations.

  - example: http://localhost:3333/reservations/
  
  - return:

  ```json
  [
    {
      "id": "624f84ef785defc1e467f903",
      "requester": "Jeferson Lucas",
      "equipment": "Notebook",
      "status": "waiting",
      "date": "1994-07-12",
      "place": "C1",
      "entry_time": "08:00",
      "exit_time": "14:20",
      "observation": ""
    },
    ... More reservations
  ]
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route **has no validation**.

- **GET**: `/reservations/:id` (**need authorization**) - For registered reservation inquiry.

  - example: http://localhost:3333/reservations/624f84ef785defc1e467f903

  - return:

  ```json
  {
    "id": "624f84ef785defc1e467f903",
    "requester": "Jeferson Lucas",
    "equipment": "Notebook",
    "status": "waiting",
    "date": "1994-07-12",
    "place": "C1",
    "entry_time": "08:00",
    "exit_time": "14:20",
    "observation": ""
  }
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route validates if the **reservation exists**.

- **PUT**: `/reservations/update/:id` (**need authorization**) - To update registered reservation.

  - example: http://localhost:3333/reservations/update/624f84ef785defc1e467f903

  ```json
  {
    "requester": "Lucas Jeferson",
    "equipment": "Notebook",
    "status": "waiting",
    "date": "1994-07-12",
    "place": "C1",
    "entry_time": "08:00",
    "exit_time": "14:20",
    "observation": ""
  }
  ```

  - return:

  ```json
  {
    "id": "624f84ef785defc1e467f903",
    "requester": "Lucas Jeferson",
    "equipment": "Notebook",
    "status": "waiting",
    "date": "1994-07-12",
    "place": "C1",
    "entry_time": "08:00",
    "exit_time": "14:20",
    "observation": ""
  }
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route validates **requester**, **equipment**, **status**, **place**, **entry_time** and **exit_time**.

- **DELETE**: `/reservations/delete/:id` (**need authorization**) - To remove registered reservation.

  - example: http://localhost:3333/reservations/delete/624f84ef785defc1e467f903

  - return:

  ```json
  {
    "message": "reserva removida."
  }
  ```

  - Authorization: This route **needs authorization**.

  - Validation: This route does **reservation** validation;

## Built with

The reserve.io-server app has been carefully developed with the following technologies:

Technologies used on the **server**:

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Yarn](https://yarnpkg.com/) - Package manager.
- [TypeScript](https://www.typescriptlang.org/pt/) - JavaScript superset with syntax for types.
- [Express](https://expressjs.com/pt-br/) - Framework for Node.js web application.
- [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for Node.js.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) - MongoDB's cloud database service.
- [JSON Web Token](https://github.com/auth0/node-jsonwebtoken#readme) - An implementation of JSON Web Tokens.
- [Node Bcrypt.js](https://github.com/kelektiv/node.bcrypt.js#readme) - A library to help you hash passwords.
- [Dotenv](https://github.com/motdotla/dotenv#readme) - Dependency module that loads environment variables from an .env file to process.env.
- [EditorConfig](https://editorconfig.org/) - EditorConfig is a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs.
- [ESLint](https://eslint.org/) - Pluggable JavaScript linter.
- [Prettier](https://prettier.io/) - Opinionated Code Formatter.

## Authors

- [@JefersonLucas](https://github.com/JefersonLucas) - _Creator_.

See also the complete list of [contributors](https://github.com/JefersonLucas/reserve.io-server/contributors) who participated in this project.

## License

This project is licensed under the MIT license - see the file [LICENSE.md](https://github.com/JefersonLucas/reserve.io-server/blob/master/LICENSE.md) for details.
