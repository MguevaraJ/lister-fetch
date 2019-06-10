<h1 align="center">📜 Lister</h1>
<h4 align="center">An application in which you can list your favorite videogames.</h4>

![pagetr](https://user-images.githubusercontent.com/46603674/59171248-19cb4400-8b10-11e9-875e-9c5412ccecc7.png)

## Getting Started

#### 1. Clone the repository.

We are located in the directory where we want to locate the project and clone the repository in this way:

```
$ git clone https://github.com/MguevaraJ/lister-fetch.git
```

------------

#### 2. Configure environment variables:

You can do it by creating the file `.env` in the root of the project:

```
MYSQL_URI = "[your-database-Address]"
MYSQL_PASS = "[your-password]"
MYSQL_USR = "[your-username]"
MYSQL_DB_NAME = "[your-database-name]"
```
More details in [HERE](https://github.com/motdotla/dotenv).

------------

#### 3. Shoose in whitch enviroment to execute the application.

You can run the application in two states:

- Development
```
$ npm run watch:dev
```
- Production
```
$ npm run start:prod
```

## Pre-requirements

- [Node.js LTS](https://nodejs.org/en/)

## Tools

The used to carry out this project are:

- [Express.js](https://expressjs.com/) - Web application framework
- [Mysql](https://github.com/mysqljs/mysql) - Database management language
- [Webpack](https://webpack.js.org/) - Module Bundler
- [Npm](https://www.npmjs.com/) - Package Manager

## Authors

- **Moises Alejandro Guevara Jauregui** - [MguevaraJ](https://github.com/MguevaraJ)

## License

This project is under license **GPL-3.0** - See the file [LICENSE](https://github.com/MguevaraJ/lister-fetch/blob/master/LICENSE) for more details.
