
const { CountryApi } = require('./../domain/country-api-endpoints'),
        request = require('request');

const countryService = () => new Promise((resolve, reject) => {
    countryApi = new CountryApi();
    request.get(countryApi.availableCountries, async (err, body) => {
        if(err) { 
          await reject(err); 
        } else { 
          await resolve(body); 
        }
    });
});

module.exports = { countryService };