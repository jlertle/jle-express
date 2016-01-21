# jle-express

[![Circle CI](https://circleci.com/gh/jlertle/jle-express/tree/master.svg?style=svg)](https://circleci.com/gh/jlertle/jle-express/tree/master)
[![Build Status](https://semaphoreci.com/api/v1/projects/31b09efe-863c-4583-bb0f-f08d8c9a01a9/666153/badge.svg)](https://semaphoreci.com/jlertle/jle-express)

[![Travis-CI](https://travis-ci.org/jlertle/jle-express.svg)](https://travis-ci.org/jlertle/jle-express)
[![Dependency Status](https://gemnasium.com/jlertle/jle-express.svg)](https://gemnasium.com/jlertle/jle-express)
[![Coverage Status](https://coveralls.io/repos/jlertle/jle-express/badge.svg?branch=master&service=github)](https://coveralls.io/github/jlertle/jle-express?branch=master)

[![bitHound Overall Score](https://www.bithound.io/github/jlertle/jle-express/badges/score.svg)](https://www.bithound.io/github/jlertle/jle-express)
[![bitHound Code](https://www.bithound.io/github/jlertle/jle-express/badges/code.svg)](https://www.bithound.io/github/jlertle/jle-express)
[![Inline docs](http://inch-ci.org/github/jlertle/jle-express.svg?branch=master)](http://inch-ci.org/github/jlertle/jle-express)

[![Code Climate](https://codeclimate.com/github/jlertle/jle-express/badges/gpa.svg)](https://codeclimate.com/github/jlertle/jle-express)
[![Issue Count](https://codeclimate.com/github/jlertle/jle-express/badges/issue_count.svg)](https://codeclimate.com/github/jlertle/jle-express)
[![Test Coverage](https://codeclimate.com/github/jlertle/jle-express/badges/coverage.svg)](https://codeclimate.com/github/jlertle/jle-express/coverage)

<!-- [![Build status](https://ci.appveyor.com/api/projects/status/pkey0tj2q28u6vr4?svg=true)](https://ci.appveyor.com/project/jlertle/jle-express) -->

**WORK IN PROGRESS**

Project Template for Express, Mithril, Caminte with Coverage (testing/security)

Includes a few npm `scripts` [(no gulp or grunt needed)](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Clone the repo](#clone-the-repo)
  - [Customize package.json](#customize-packagejson)
  - [Configure your CI build](#configure-your-ci-build)
  - [Customize the README.md file](#customize-the-readmemd-file)
  - [Build your module](#build-your-module)
- [Contributing](#contributing)
- [Third-party libraries](#third-party-libraries)
- [Inspiration](#inspiration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

* ES6 with Babel
* Lint with JSHint
* Tape tests with coverage report
* Safer security defaults
* Dependency security audits with nsp
* Ensure dependencies are properly declared in package.json
* Git precommit hook enforces quality checks on commit
* Travis CI integration


## Getting Started

### Clone the repo

In your terminal:

```
git clone git@github.com:jlertle/jle-express.git <your-new-repo-name>
cd <your-repo-name>
rm -rf <.git> # strip the boilerplate .git config
git init # create your own .git config
git add .
git commit -m 'Initial commit'
```

### Customize package.json

Open up `package.json`. At minimum, you'll need to customize the `name`, `description`, & `version` fields.


### Configure your CI build

This package comes with a `.travis.yml` file. You'll need to replace it with your own build config. If you want to continue using TravisCI and you don't see any problems with the config, replacing `.travis.yml` is optional. You still need to activate [Travis CI for your repository](http://docs.travis-ci.com/user/getting-started/).


### Customize the README.md file

Pop open README.md. Find this text:

```
[![Travis-CI](https://travis-ci.org/jlertle/jle-express.svg)](https://travis-ci.org/jlertle/jle-express)
```

And replace it with your info:

```
[![Travis-CI](https://travis-ci.org/<your-github-name>/<your-github-repo-name>.svg)](https://travis-ci.org/<your-github-name>/<your-github-repo-name>)
```

You'll probably also want to replace the content of "Getting Started" & "Features", and ensure that you're refering to the correct repository in the "Contributing" document.


### Build your module

1. For production

  ```sh
  npm run build
  ```

  It will run webpack once building full and minified versions of your library in `./build` with sourcemaps.


2. For development

  ```sh
  npm start
  ```

  This will run the `webpack` build in watch mode and will include ESLint checks on compile time.

  <!-- ![webpack](https://cloud.githubusercontent.com/assets/175264/8304834/d66f7944-19ec-11e5-9feb-9f66caa5c593.gif) -->

  **Note** minified version will not be built in dev mode.

## Contributing

- [Contributing](docs/contributing/index.md)
  - [Versions: Release Names vs Version Numbers](docs/contributing/versions/index.md)

## Third-party libraries

  The following third-party libraries are used by this module:

  * mithril: https://github.com/lhorie/mithril - Client-Side Framework for Building Brilliant Applications
  * express: https://github.com/visionmedia/express - Fast, unopinionated, minimalist web framework
  * caminte: https://github.com/biggora/caminte - Cross-DB ORM for Node
  * stylus: https://github.com/stylus/stylus - expressive, dynamic, robust css

  * nsp: https://github.com/nodesecurity/nsp - helps identify known vulnerabilities
  * helmet: https://github.com/helmetjs/helmet - helps secure Express by setting various HTTP headers
  * ratelimit-middleware: https://github.com/defunctzombie/ratelimit-middleware - limit connections

  * browserify-middleware: https://github.com/ForbesLindesay/browserify-middleware - to browserify the stuffs
  * istanbul-middleware: https://github.com/gotwarlost/istanbul-middleware - code coverage numbers
  * browserify: https://github.com/substack/node-browserify - browser-side require() the node.js way
  * supertest: https://github.com/visionmedia/supertest - HTTP assertions made easy
  * tape: https://github.com/substack/tape - tap-producing test harness for node and browsers
  * istanbul: https://github.com/gotwarlost/istanbul - code coverage tool

  * dependency-check: https://github.com/maxogden/dependency-check - checks modules used are listed in package.json
  * rimraf: https://github.com/isaacs/rimraf - dev dependency for tests
  * doctoc: https://github.com/thlorenz/doctoc - generates table of contents for markdown
  * jshint: https://github.com/jshint/jshint - detect errors and potential problems in JavaScript
  * jscs: https://github.com/jscs-dev/node-jscs - JavaScript Code Style checker

  * winston: https://github.com/winstonjs/winston - multi-transport async logging
  * express-winston: https://github.com/bithavoc/express-winston - express middleware for winston
  * winston-loggly: https://github.com/winstonjs/winston-loggly - Loggly transport for winston

## Inspiration
  * http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
  * https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4
  * https://github.com/cloverfield-tools/prod-module-boilerplate
  * https://blog.risingstack.com/node-js-security-checklist/
