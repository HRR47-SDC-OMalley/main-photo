const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/../public/dist'))

app.listen(port, function () {
 console.log('Listening ' + port);
});