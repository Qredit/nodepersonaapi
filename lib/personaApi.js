/*
* A Promised NodeJS Module for connecting with the Persona V1 API
*/

const request = require("request");
const Big = require('big.js');

var personaApi = /** @class */ (function () {

    function personaApi(apiURL) {
        if (apiURL === void 0)
            this.apiURL = 'https://unifiedapi.qredit.cloud/api/persona';
        else
            this.apiURL = apiURL;

        return this;
    }

    personaApi.prototype.getPersonaPassport = function (personaAsset = '', walletId = '') {

        return new Promise((resolve, reject) => {

            /*
            * example:
            * https://unifiedapi.qredit.cloud/api/persona/passport/XQR/XRa2Gr4iPKcmYpxYyCFx49jBErWVhjG3Jo
            */

            request.get(this.apiURL + '/passport/' + personaAsset + '/' + walletId, { json: true }, function (error, response, body) {

                if (error) {
                    reject(error); return;
                }
                resolve(body);

            });

        });

    };

    return personaApi;

}());

exports.default = personaApi;
