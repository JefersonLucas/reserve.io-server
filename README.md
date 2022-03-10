# Reserve.io - Server

![reserve.io](https://img.shields.io/badge/JefersonLucas-reserve.io-brightgreen?style=flat)
![Created Badge](https://badges.pufler.dev/created/JefersonLucas/reserve.io-server?style=flat)
![Updated Badge](https://badges.pufler.dev/updated/JefersonLucas/reserve.io-server?style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/JefersonLucas/reserve.io-server?style=flat)
![MIT](https://img.shields.io/github/license/JefersonLucas/reserve.io-server?style=flat)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/JefersonLucas/reserve.io-server?style=flat)

![React](https://img.shields.io/badge/-React-21262d?fff&style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/-TypeScript-21262d?fff&style=flat-square&logo=typescript)
![Styled-components](https://img.shields.io/badge/-Styled%20components-21262d?fff&style=flat-square&logo=styled-components)
![Node.js](https://img.shields.io/badge/-Node.js-21262d?style=flat-square&logo=node.js&logoColor=509941)
![Yarn](https://img.shields.io/badge/-Yarn-21262d?fff&style=flat-square&logo=yarn)
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

2. Start the client on the port [localhost:3000](http://localhost:3000)

```bash
npm start
# or
yarn start
```

## Built with

The reserve.io-server app has been carefully developed with the following technologies:

- Technologies used on the **server**:

  - [Yarn](https://yarnpkg.com/) - Package manager.
  - [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [TypeScript](https://www.typescriptlang.org/pt/) - JavaScript superset with syntax for types.
  - [Express](https://expressjs.com/pt-br/) - Framework for Node.js web application.
  - [MongoDB Atlas](https://www.mongodb.com/atlas/database) - MongoDB's cloud database service.
  - [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for Node.js.
  - [ESLint](https://eslint.org/) - Pluggable JavaScript linter.
  - [Prettier](https://prettier.io/) - Opinionated Code Formatter.

## Authors

- [@JefersonLucas](https://github.com/JefersonLucas) - _Creator_.

See also the complete list of [contributors](https://github.com/JefersonLucas/reserve.io-server/contributors) who participated in this project.

## License

This project is licensed under the MIT license - see the file [LICENSE.md](https://github.com/JefersonLucas/reserve.io-server/blob/master/LICENSE.md) for details.
