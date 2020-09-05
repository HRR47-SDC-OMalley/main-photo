const postgres = require('postgres');
const { DB_URL, MAIN_TABLE_NAME } = require('../config');

const sql = postgres(DB_URL);

console.log('using', DB_URL, MAIN_TABLE_NAME);

//test connection
sql`
  select * from ${sql(MAIN_TABLE_NAME)}
  where lid = 999;
`.then((res) => {
  console.log('query results', res);
}).catch((err) => {
  console.log('ERR', err);
});

//Create
const createListingImage = (listingId, url) => {
  return sql`
    insert into ${sql(MAIN_TABLE_NAME)}
    values (
      ${listingId},
      (select max(iid) from ${sql(MAIN_TABLE_NAME)}
      where lid = ${listingId}) + 1,
      ${url}
    )
  `
}

//Read
const retrieveListingImages = (listingId) => {
  return sql`
    select * from ${sql(MAIN_TABLE_NAME)}
    where lid = ${listingId}
  `
}

// Update
const updateListingImage = (listingId, imageId, newUrl) => {
  return sql`
    update ${sql(MAIN_TABLE_NAME)}
    set url = ${newUrl}
    where lid = ${listingId}
    and iid = ${imageId}
  `
}

//Delete
const deleteListingImage = (listingId, imageId) => {
  return sql`
    delete from ${sql(MAIN_TABLE_NAME)}
    where lid = ${listingId}
    and iid = ${imageId}
  `
}

module.exports.createListingImage = createListingImage;
module.exports.retrieveListingImages = retrieveListingImages;
module.exports.updateListingImage = updateListingImage;
module.exports.deleteListingImage = deleteListingImage;
