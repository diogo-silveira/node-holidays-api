const express = require('express'),
      app = express(),
      port = process.env.port || 3000,
      router = express.Router(),
      { country, routes, countryService } = require('./domain/domain');      

console.log(routes);

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