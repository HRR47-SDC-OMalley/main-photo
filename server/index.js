const express = require('express');

const app = express();
const path = require('path');
const db = require('../db/index.js');

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/item', (req, res) => {
  const itemId = req.query.id || Math.floor(Math.random() * 50) || 36;
  db.retrieveListingImages(itemId, (results) => {
    res.json(results);
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Listening ' + port);
});
