const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/listing_images', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const imagesSchema = mongoose.Schema({
  id: Number,
  url: String,
  listing_id: Number,
});

const Images = mongoose.model('Images', imagesSchema);

const dropDatabase = () => mongoose.connection.dropDatabase();

const retrieveListingImages = (listingId, callback) => {
  const constURL = 'https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/';
  Images.find({ listing_id: listingId }).sort({ id: 1 }).exec((err, results) => {
    if (err) { return err; }
    const listings = results.map((image) => {
      const urlEnd = image.url;
      image.url = constURL + urlEnd;
      return image;
    });
    return callback(listings);
  });
};

module.exports.Images = Images;
module.exports.dropDatabase = dropDatabase;
module.exports.retrieveListingImages = retrieveListingImages;
