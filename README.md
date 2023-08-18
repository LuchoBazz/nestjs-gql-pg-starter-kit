<h1 align="center">Nest.js using GraphQL and Raw PostgreSQL Starter Kit</h1>

<p align="center">A starter kit for creating Nest.js projects with GraphQL and raw PostgreSQL.</p>

<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://raw.githubusercontent.com/nestjs/docs.nestjs.com/master/src/assets/logo-small.svg" height="100" width="100" alt="Nest logo" /></a>
  <a href="https://graphql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" height="100" width="100" alt="TypeORM logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" height="100" width="100" alt="PostgreSQL logo" /></a>
  <a href="https://www.docker.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" height="100" width="100" alt="Docker logo" /></a>
  <a href="https://jestjs.io/" target="blank"><img src="https://raw.githubusercontent.com/jestjs/jest/main/website/static/img/jest.png" height="100" width="100" alt="Jest logo" /></a>
  <a href="https://prettier.io/" target="blank"><img src="https://raw.githubusercontent.com/prettier/prettier/main/website/static/icon.png" height="100" width="100" alt="Prettier logo" /></a>
  <a href="https://eslint.org/" target="blank"><img src="https://raw.githubusercontent.com/eslint/archive-website/e19d0bd4b5c116996f4cd94d4e90df5cc4367236/assets/img/logo.svg" height="100" width="100" alt="ESLint logo" /></a>
  <a href="firebase.google.com" target="blank"><img src="https://i.ibb.co/f4wm6Lg/firebase.webp" height="100" width="100" alt="Firebase logo" /></a>
  <a href="https://supabase.com/" target="blank"><img src="https://i.ibb.co/SKHhMZ9/supabase.png" height="100" width="100" alt="Supabase logo" /></a>
  <a href="https://stripe.com/" target="blank"><img src="https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg?q=80&w=1082" height="100" width="100" alt="Stripe logo" /></a>
  <a href="https://www.paypal.com/us/home" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg" height="100" width="100" alt="Paypal logo" /></a>
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

This project is licensed under the [MIT licensed](#).. See the LICENSE file for details.

### Reference

- https://github.com/mwanago/nestjs-raw-sql/tree/master