<h1 align="center">Nest.js using GraphQL and Raw PostgreSQL Starter Kit</h1>

<p align="center">A starter kit for creating Nest.js projects with GraphQL and raw PostgreSQL.</p>

<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://github.com/nestjs/docs.nestjs.com/blob/master/src/assets/logo-small.svg" height="100" alt="Nest logo" /></a>
  <a href="https://graphql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" height="100" alt="TypeORM logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" height="100" alt="PostgreSQL logo" /></a>
  <a href="https://jestjs.io/" target="blank"><img src="https://github.com/facebook/jest/blob/main/website/static/img/jest.png" height="100" alt="Jest logo" /></a>
  <a href="https://prettier.io/" target="blank"><img src="https://github.com/prettier/prettier/blob/main/website/static/icon.png" height="100" alt="Prettier logo" /></a>
  <a href="https://eslint.org/" target="blank"><img src="https://github.com/eslint/website/blob/master/assets/img/logo.svg" height="100" alt="ESLint logo" /></a>
</p>

## Description

This starter kit provides a template for creating Nest.js projects with GraphQL as the API layer and raw PostgreSQL for database operations.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Migrations
```bash
# Create new Migration
dbmate new create_users_table

# Run Migrations
npm run apply-migrations
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - LuchoBazz
- Twitter - [@LuchoBazz](https://twitter.com/LuchoBazz)

## License

This project is licensed under the [MIT licensed](LICENSE).. See the LICENSE file for details.

### Reference

- https://github.com/mwanago/nestjs-raw-sql/tree/master