# Node Persona API Helper

[![https://t.me/@nayiem](https://telegram.me/@nayiem)

A Promised NodeJS Module for connecting with the Persona v1 API

## Install via git

```
git clone https://github.com/qredit/nodepersonaapi
cd nodepersonaapi
npm install

node example.js
```

example.js:

```
const personaApi = require("./lib/personaApi");
const papi = new personaApi.default();


(async () => {

  var alias = await papi.getAlias();

  console.log("Alias: " + data.alias);

})();
```

## Install via npm

```
npm install --save https://github.com/qredit/nodepersonaapi
```

```
const personaApi = require("./lib/personaApi");
const papi = new personaApi.default();


(async () => {

  var alias = await papi.getAlias();

  console.log("Alias: " + data.alias);

})();
```
