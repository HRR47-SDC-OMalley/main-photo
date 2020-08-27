const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('../db/index.js');

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use('/item/:id', express.static(path.resolve(__dirname, './../public/dist')));

//Create
app.post('*/photo/api/item/:id', (req, res) => {
  const itemId = req.params.id;
  db.getNextImageId(itemId)
    .then((id) => {
      return db.createListingImage({
        url: req.body.url,
        listing_id: itemId,
        id: id,
      });
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => console.log(err));
});

//Read
app.get('*/photo/api/item/:id', (req, res) => {
  const itemId = req.params.id;
  db.retrieveListingImages(itemId, (results) => {
    res.status(200).json(results);
  });
});

// //Update
app.put('*/photo/api/item/:id', (req, res) => {
  const productId = req.params.id;
  const imageId = req.body.id;
  const imageData = {
    url: req.body.url
  }
  db.getHashFromId(productId, imageId)
    .then((hashId) => {
      return db.updateListingImages(hashId, imageData)
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
});

//Delete
app.delete('*/photo/api/item/:id', (req, res) => {
  const productId = req.params.id;
  const imageId = req.body.id;
  console.log('DELETE');
  db.getHashFromId(productId, imageId)
    .then((hashId) => {
      return db.deleteListingImage(hashId)
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
