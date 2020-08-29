var fs = require('fs');
var path = require('path');
var csvWriter = require('csv-write-stream');

var data = fs.readFileSync(path.join(__dirname, 'images.json'), 'utf8');
var imgUrls = JSON.parse(data);

var outpath = path.join(__dirname, 'data.csv');
if (fs.existsSync(outpath)) {
  fs.unlinkSync(outpath);
}

var writer = csvWriter({
  headers: [
    "_id",
    "id",
    "listing_id",
    "url",
  ]
});

writer.pipe(fs.createWriteStream(outpath));

var writeData = (nrecords) => {
  var globalId = 0;
  var listingId = 0;
  var imageId = 0;
  var nImages = 12;
  var ok = true;
  var write = () => {
    do {
      var randInd = Math.floor(Math.random() * imgUrls.length);
      var randUrl = imgUrls[randInd];
      if (listingId === nrecords) {
        writer.write([globalId, imageId, listingId, randUrl]);
        writer.end();
      } else {
        ok = writer.write([globalId, imageId, listingId, randUrl]);
        globalId++;
        imageId++;
        if (imageId === nImages) {
          imageId = 0;
          listingId++;
          console.log('writing', listingId);
          nImages = Math.floor(Math.random() * 10) + 5;
        }
      }
    } while (listingId < nrecords && ok);
    if (listingId < nrecords) {
      writer.once('drain', write);
    }
  }
  write();
}

writeData(10000000);