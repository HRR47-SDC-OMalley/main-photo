const mongoose = require('mongoose');
mongoose.Promise = Promise;

const constURL = 'https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/';

mongoose.connect(process.env.DBURL || 'mongodb://localhost/listing_images', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  connectTimeoutMS: 10000,
})
  .catch((err) => { throw new Error(err); });

const imagesSchema = mongoose.Schema({
  id: Number,
  url: String,
  listing_id: Number,
});

const Images = mongoose.model('Images', imagesSchema);

const dropDatabase = () => mongoose.connection.dropDatabase();

const getNextImageId = (productId) => {
  return new Promise((resolve, reject) => {
    Images.find({listing_id: productId}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const last = data.reduce((memo, v) => {
          return v.id > memo ? v.id : memo;
        }, data[0].id);
        resolve(last+1);
      }
    })
  });
};

const getHashFromId = (productId, imageId) => {
  return new Promise((resolve, reject) => {
    Images.find({listing_id: productId}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.filter(e => e.id === imageId)[0]._id);
      }
    })
  });
};

//Create
const createListingImage = (imageData) => {
  return new Promise((resolve, reject) => {
    Images.create(imageData, {}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

//Read
const retrieveListingImages = (listingId, callback) => {
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

//Update
const updateListingImages = (hashId, imageData) => {
  console.log(hashId, imageData);
  return new Promise((resolve, reject) => {
    Images.update({ _id: hashId }, imageData, {}, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    });
  });
};

//Delete
const deleteListingImage = (hashId) => {
  return new Promise((resolve, reject) => {
    Images.deleteOne({ _id: hashId}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports.Images = Images;
module.exports.dropDatabase = dropDatabase;
module.exports.retrieveListingImages = retrieveListingImages;
module.exports.createListingImage = createListingImage;
module.exports.updateListingImages = updateListingImages;
module.exports.deleteListingImage = deleteListingImage;
module.exports.getNextImageId = getNextImageId;
module.exports.getHashFromId = getHashFromId;