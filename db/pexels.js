const px = require('pexels');
const fs = require('fs');
const path = require('path');
const pxConfig = require('../pexels.config.js');

const client = px.createClient(pxConfig.API_KEY);
const N = 80;
const query = 'guitar';
const outpath = path.join(__dirname, 'images.json');
if (fs.existsSync(outpath)) {
  fs.unlinkSync(outpath);
}

const getPagePhotos = (page) => {
  return client.photos.search({query: query, per_page: N, page: page}).then(photos => {
    return photos.photos.map(p => p.src.large);
  });
};

pages = [...Array(13).keys()];
urlProms = pages.map(p => getPagePhotos(p+1));
Promise.all(urlProms).then(urlLists => {
  var flat = urlLists.reduce((memo, list) => {
    memo.push(...list);
    return memo;
  });
  fs.writeFileSync(outpath, JSON.stringify(flat));
});