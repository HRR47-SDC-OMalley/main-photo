const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/listing_images', { useUnifiedTopology: true, useNewUrlParser: true });

let imagesSchema = mongoose.Schema({
  _id: Number,
  url: String,
  listing_id: Number
});

let Images = mongoose.model('Images', imagesSchema);

let dropDatabase =  () => mongoose.connection.dropDatabase();

module.exports.Images = Images;
module.exports.dropDatabase = dropDatabase;