# Meu primeiro projeto react

Cria sua primeira aplicacao react do zero

## Iniciando NPM

vai gerar ser arquivo de configurancao e gerenciamento de pacotes (package.json)

```sh
npm init
```

## Instalando Webpack nosso empacotador de modulos javascript

```sh
npm install -D webpack webpack-cli webpack-dev-server
```

## Instalando as bibliotecas React e ReactDOM

```sh
npm install -D react react-dom
```

## Criando pasta src com dois arquivos

```sh
  app.js
  index.js
```

## Em app.js aplicar seguinte código

```js
import React from "react";

function App() {
  return <h1>my first app</h1>;
}

export default App;
```

## Em index.js aplicar seguinte código

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
```

## Na raiz do projeto criamos arquivo webpack.config.js e aplicamos o seguinte codigo

```js
const path = require("path");
module.exports = {
  mode: "development",
  cache: false,
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./public"),
    },
    compress: true,
    port: 9000,
  },
};
```

## Na raiz do projeto criamos arquivo .babelrc e aplicamos o seguinte codigo

```json
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-react-jsx"
  ]
}
```

## No arquivo package.json adicionamos o seguinte script

```json
  "serve": "webpack serve"
```

## Instalando o babel para transpilar o codigo

```sh
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install -D @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-transform-react-jsx
```

## Antes de executar o projeto vamos criar o seguinte arquivo public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

## Agora executamos

```sh
npm run serve
```

### Links E Referencias

- [REACT](https://reactjs.org/docs/getting-started.html)
- [NODE](https://nodejs.org/en/docs/)
- [NPM](https://docs.npmjs.com/)
- [WEPPACK](https://webpack.js.org/concepts/)
