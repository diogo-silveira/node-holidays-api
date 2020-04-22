const express = require('express'),
      app = express(),
      port = process.env.port || 3000,
      router = express.Router(),
      { country } = require('./domain/models'),
      { routes } = require('./domain/routes'),
      { CountryApi } = require('./domain/country-api-endpoints'),
      { countryService } = require('./services/country-service');

console.log(new Date());

router.route(routes.countries)
    .get((req,res) => {
        countryService().then((response) => {
           return res.json(response); 
        }).catch( () => {
           return res.send(err); 
    });
});

app.use(routes.api, router);

app.get('/', (req, res) => {
    res.send('Welcome to Holidays Travel API!');
});

app.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});