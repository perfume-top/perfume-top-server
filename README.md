# Perfume Top

  [perfume.top](http://perfume.top) is a project about the world of [perfume](http://www.perfume-web.jp/).

  We are committed to building the world project with advanced technology

  The project is planed to be complete before 2019.8.18

  All code for perfume.top is open source and based on [MIT licensed](LICENSE).
  
  We welcome contributions!

## Description

  perfume-top-server is a server project of perfume.top

## Installation

```bash
$ npm install
```

## Configration

```bash
$ cp production.env development.env

# edit server / web / admin root
# you should git clone perfume-top-web / perfume-top-admin & install
$ vim development.env

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Perfume Top is [MIT licensed](LICENSE) Project.
