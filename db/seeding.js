const db = require('./index.js');

const generateDB = () => {
  db.dropDatabase();
  let id = 1;
  let listingId = 1;
  let count = 0;
  const imageCounts = [5, 6, 7, 8];
  const randomSort = () => Math.floor(Math.random() * imageCounts.length);
  let index = randomSort();
  for (let i = 1; i < 501; i += 1) {
    if (count === imageCounts[index]) {
      listingId += 1;
      index = randomSort();
      count = 0;
    }
    db.Images.create({
      id,
      url: `ac-guit${i}.jpeg`,
      listing_id: listingId,
    });
    count += 1;
    id += 1;
  }
};

generateDB();

module.exports.generateDB = generateDB;
