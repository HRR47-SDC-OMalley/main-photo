const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const db = require('../db/index.js');

app.use(express.static(__dirname + '/../public/dist'))


app.get('/item', (req, res) => {
  let itemId = req.query.id;
  db.retrieveListingImages(itemId, (results) => {
      res.json(results);
  });
});


app.listen(port, function () {
 console.log('Listening ' + port);
});

