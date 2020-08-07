const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const db = require('../db/index.js')

app.use(express.static(__dirname + '/../public/dist'))

//NEW
// app.get('/api/images', (req, res) => {
//   db.retrieveListingImages(2, (results) => {
//       res.json(results);
//   });
//   // res.end();
// });


app.listen(port, function () {
 console.log('Listening ' + port);
});