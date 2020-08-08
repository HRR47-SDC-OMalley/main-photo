const db = require('./index.js')

// let constURL = "https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/"

const generateDB = () => {
  db.dropDatabase();
  let id = 1;
  let listingId = 1;
  let count = 0;
  let imageCounts = [5, 6, 7, 8];
  const randomSort = () => Math.floor(Math.random() * imageCounts.length);
  let index = randomSort();
  for (let i = 1; i < 501; i++) {
    if (count === imageCounts[index]) {
      listingId++;
      index = randomSort();
      count = 0;
    }
    db.Images.create({
      _id: id,
      url: `ac-guit${i}.jpeg`,
      listing_id: listingId,
    });
    count++;
    id++;
  }
};

generateDB();
