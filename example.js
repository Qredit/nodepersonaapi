/*
  Example of using this library without NPM install
*/

const personaApi = require("./lib/personaApi");
const papi = new personaApi.default();


(async () => {

  var alias = await papi.getAlias();

  console.log("Alias: " + data.alias);

})();
