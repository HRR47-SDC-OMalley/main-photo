const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/listing_images', {
   useUnifiedTopology: true,
   useNewUrlParser: true
  });

let imagesSchema = mongoose.Schema({
  _id: Number,
  url: String,
  listing_id: Number
});

let Images = mongoose.model('Images', imagesSchema);

let dropDatabase =  () => mongoose.connection.dropDatabase();

let retrieveListingImages = (listingId, callback) => {
  let constURL = "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/";
  Images.find({listing_id: listingId}).exec((err, results) => {
    if (err) {return err}
    callback(results);
  });
}

module.exports.Images = Images;
module.exports.dropDatabase = dropDatabase;
module.exports.retrieveListingImages = retrieveListingImages;