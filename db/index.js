const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/listing_images');

let imagesSchema = mongoose.Schema({
  _id: Number,
  url: String,
  listing_id: Number
});

let Images = mongoose.model('Images', imagesSchema);

let acousticGuitarImages = ["https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/Martin_Listing_Photos.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/bm9ip7nofxyn08dzbw5u.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/bmlwv3geflzif7mtuvrc.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/coqmavrsnk2lx3htvixb.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/fixgrkymhaldrzgbwemv.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/ftcphlyjcaryghcax67m.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/h9zfzuptzkm1viocezjc.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/hmm8c1s6rlcxe3mycq5z.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/kfstftkidzk5eedvi32a.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/mdjegesvr0kvje1gt0em.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/mxz8a8jgq3cmoc3dap3w.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/qzaa0bx2oep9avciautu.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/r10qe8jacomq06qgnagv.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/rwq79utqlogkxumccjue.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/tbptcxhe2fjeyk1pemks.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/yqwbkynvpdv2xz3vv6jw.jpg", "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/zmoho1siuxrf5ywroqoe.jpg"];

let generateDB = () => {
  let id = 1;
  let listingId = 101;
  acousticGuitarImages.forEach((image) => {
    Images.create({
    _id: id,
    url: image,
    listing_id: listingId
   });
   id++;
   listingId++;
  })
}

module.exports.generateDB = generateDB;