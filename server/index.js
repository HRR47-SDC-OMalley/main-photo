const express = require('express');

const app = express();
const path = require('path');
const db = require('../db/index.js');

app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use('/item/:id', express.static(path.resolve(__dirname, './../public/dist')));

//need to fix id retrieval

app.get('/api/item/:id', (req, res) => {
  const itemId = req.params.id;
  db.retrieveListingImages(itemId, (results) => {
    res.json(results);
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
