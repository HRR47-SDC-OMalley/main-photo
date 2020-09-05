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
  const listingId = req.params.id;
  const url = req.body.data.url;
  db.createListingImage(listingId, url)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
});

//Read
app.get('*/photo/api/item/:id', (req, res) => {
  const listingId = req.params.id;
  db.retrieveListingImages(listingId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
});

// //Update
app.put('*/photo/api/item/:id', (req, res) => {
  const listingId = req.params.id;
  const imageId = req.body.data.iid;
  const url = req.body.data.url;
  db.updateListingImage(listingId, imageId, url)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

//Delete
app.delete('*/photo/api/item/:id', (req, res) => {
  const listingId = req.params.id;
  const imageId = req.body.data.iid;
  db.deleteListingImage(listingId, imageId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
