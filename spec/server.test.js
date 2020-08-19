/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
const retrieveListingImages = () => {
  const constURL = 'https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/';
  let results = [{ url: 'ac-guit1.jpeg' }, { url: 'ac-guit2.jpeg' }];
  results = results.map((image) => {
    const urlEnd = image.url;
    image.url = constURL + urlEnd;
    return image;
  });
  return results;
};

describe('transform', () => {
  it('should properly return url', () => {
    const data = retrieveListingImages();
    expect(data[0].url).toBe('https://acoustic-guitar-images.s3.us-east-2.amazonaws.com/ac-guit1.jpeg');
  });
});
