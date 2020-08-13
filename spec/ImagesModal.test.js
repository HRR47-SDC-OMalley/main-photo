import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import images from './__mocks__/imagesMock.js';
import ImagesModal from '../client/components/ImagesModal.jsx';

configure({ adapter: new Adapter() });

describe('ImagesModal', () => {
  const component = mount(<ImagesModal images={images} mainImage={images[0]} />);
  const componentRendered = component.render().toString();

  // console.log(component.find('Next').simulate('click'));

  test('Retrieves all mock images', (done) => {
    const count = images.length;
    expect(count).toBe(component.state().images.length);
    done();
  });

  test('Retrieves correct main image', (done) => {
    const mainImage = images[0];
    expect(mainImage).toBe(component.state().mainImage);
    done();
  });

  test('Renders correct main image to page', (done) => {
    const mainImage = component.state().mainImage.url;
    const firstIndex = componentRendered.indexOf(mainImage);
    const lastIndex = componentRendered.lastIndexOf(mainImage);
    expect(firstIndex === lastIndex).toBe(false);
    done();
  });

  test('Renders correct number of buttons', (done) => {
    expect(component.find('button').length).toBe(3);
    done();
  });

  test('Renders on correct number of images', (done) => {
    expect(component.find('img').length).toBe(7);
    done();
  });
});
