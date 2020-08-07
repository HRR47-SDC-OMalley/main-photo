const db = require('./index.js')

let constURL = "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/"

let generateDB = () => {
 db.dropDatabase();
  let id = 1;
  let listingId = 1;
  for (var i = 1; i < 501; i++) {
    if((i-1)%5 === 0){
      listingId++
    }
    db.Images.create({
    _id: id,
    url: `ac-guit${i}.jpeg`,
    listing_id: listingId
   });
   id++;
  }
  return;
}

generateDB();
