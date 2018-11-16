# Awesome Calculator

The project was developed in pure HTML/SCSS and JS as well as matched with: https://zpl.io/a30O96N

## 1. To run

Follow the steps bellow to enjoy it:

Note: You must to type the commands into the "root project" folder.

### 1.1 Install dependencies

To install all dependencies of the project

```bash
$ npm install
```

Boirlerplate:

-   ESLint
-   Jest
-   JSDoc
-   SASS
-   HTTPServer
-   DocDash

### 1.2 Up the server

Expose the project folder

```bash
$ http-server
```

### 1.3 Enjoy it!

#### 1.3.1 Access the Awesome Calculator

```bash
http://localhost:8080
```

#### 1.3.2 JSDoc

To see all JS documentation

```bash
http://localhost:8080/out
```

To generate doc (It doesn't necessary if you don't changed)

```bash
$ jsdoc ./src/components
```

## 2. Instructions To develop

Front-end Awesome Calcultor - development tools & aproaches.

#### 2.1 IDE & Runtime:

-   VSCode (https://code.visualstudio.com/download)
-   Node.js (https://nodejs.org/en/download/)

#### 2.2 Extentions:

-   ESlint Plugin (Airbnb Style Guide)
-   Prettier Plugin
-   SCSS IntelliSense
-   EditorConfig
-   LiveServer

#### 2.3 VSCode: User Settings (Prettier)

-   "prettier.eslintIntegration": true

#### 2.4 VSCode: User Settings (Editor Config)

-   "editor.formatOnSave": true,

#### 2.5 Chrome Extentions:

-   ColorZilla

#### 2.6 Finally:

You just need watch the SASS preprocessing:

```
sass --watch ./src/assets/global.scss ./src/assets/output.css
sass --watch ./src/assets/mobile.scss ./src/assets/mobile.css
```

#### 2.7 Concepts adopted:

-   JavaScript - AirBNB Style Guide (https://github.com/airbnb/javascript)
-   BEM Convention CSS - Block, Element Modifier (http://getbem.com/)
-   SCRUM Agile Method (http://scrummethodology.com/)

##### Good codding!

## 3. To Test

It was used the Jest - Delightful JavaScript Testing.

-   All tests are kept in /test folder
-   It was named following the pattern: /src/main.js > /test/main.test.js

To load the tests use the command bellow:

```
npm test
```
