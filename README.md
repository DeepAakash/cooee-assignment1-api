<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


# Cooee Project-1-api

This project is the backend application for a web app that performs crucial backend operations such as data storage, processing, and aggregation.

## About Cooee
[Cooee](https://www.letscooee.com/) is a cutting-edge tech company that specializes in using Machine Learning (ML) to optimize e-commerce brand conversions. They provide innovative solutions to empower businesses with actionable insights and data-driven strategies.

## Tech Stack
- NestJS version 10.3.2


## Dependencies and Installation
- Mongoose
- @nestjs/mongoose
- @nestjs/config
- class-validator
- class-transformer
- @nestjs/passport
- passport-local
- @nestjs/jwt
- passport-jwt
- bcryptjs
To install all the importnat dependencies run:

```bash
  npm i
```

## Running the app

To start the development server at http://localhost:3000/ run:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Features
- Store data in MongoDB collection named 'event'.
- Perform aggregation pipeline to create materialized view 'itemReport'.
- Further aggregation pipeline to process 'itemReport' data for frontend table.

## Usage
- To start using the backend API, make sure the server is running locally on http://localhost:3000/api.

- User Authentication: Login with existing user: POST /auth/login


## API Endpoints
- POST /auth/login: Login with existing user.
- POST /event: Create new event.
- GET /item-report: Get the aggregated data representation of all entries.


## Authentication
- Only authenticated users have access to create new data entries.
- Backend validation ensures data integrity and prevents unauthorized access.


## Deployment
The application is hosted using Vercel. You can visit the deployed version at [Cooee Project-1](https://cooee-project1.vercel.app/).


## Future Scope

- Implementation of update and delete features on the table
- Implementation of pagination in the in NestJS instead of Angular for huge data sets
- Implementation of search functionality in NestJS instead of Angular, for optimal load time in cases of huge data sets.

## Frontend Repository

The frontend of this application is implemented in a separate repository. You can find the frontend codebase and documentation at the following link:

- [Frontend Repository](https://github.com/your-username/frontend-repo)

Feel free to explore the frontend repository for more details on the client-side implementation and user interface.

## Further help
To get more help on the Angular CLI, you can use the following command:
```bash
  nest --help

```
Or go check out the [NestJS Documentation](https://docs.nestjs.com) page.
