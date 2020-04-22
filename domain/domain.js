 const domain = { country } = require('./models'),
                { routes } = require('./routes'),
                { countryService } = require('../services/country-service');


module.exports = { 
    country,
    routes,
    countryService
 };