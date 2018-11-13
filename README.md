# Awesome Calculator

The project was developed in pure HTML/SCSS and JS as well as matched with: https://zpl.io/a30O96N.

## To run

Follow the steps bellow to enjoy it:

Note: You must to type the commands into the "root project" folder.

### 1- Install

To install all dependencies of the project

```bash
$ npm install
```

Boirlerplate:

-   ESlint

### 2- Install http server

To install simple server http

```bash
$ npm http-server
```

### 3 - Up the server

Expose the project folder

```bash
$ http-server
```

### 4- Enjoy it!

#### Awesome Calculator

```bash
Browser: localhost:8080
```

#### JSDoc

To see all JS documentation

```bash
Browser: localhost:8080/out
```

To generate doc (It doesn't necessary if you don't changed)

```bash
jsdoc .
```

## Instructions To develop

Front-end Awesome Calcultor - development boilerplate

#### IDE:

-   VSCode

#### Extentions:

-   ESlint (Airbnb Style Guide)
-   Prettier
-   SCSS IntelliSense
-   EditorConfig

#### VSCode: User Settings (Prettier)

-   "prettier.eslintIntegration": true

#### VSCode: User Settings (Editor Config)

-   "editor.formatOnSave": true,

#### Chrome Extentions:

-   ColorZilla
-   LiveReload

#### Finally:

You just need watch the SASS preprocessing:

```
sass --watch ./assets/global.scss ./assets/output.css
```

##### Good codding!

## To Test

It was used the Jest - Delightful JavaScript Testing.

-   All tests are kept in /test folder
-   It was mamed following: /src/main.js > /test/main.test.js

To load the tests use the command bellow:

```
npm test
```
