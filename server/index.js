const express = require('express');

const app = express();
const path = require('path');
const db = require('../db/index.js');

const port = process.env.PORT || 3001;
console.log(path.join(__dirname, '/../public/dist'));
app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/item', (req, res) => {
  const itemId = req.query.id;
  db.retrieveListingImages(itemId, (results) => {
    res.json(results);
  });
});


app.listen(port, function () {
 console.log('Listening ' + port);
});