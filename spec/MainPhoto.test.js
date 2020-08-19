/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import images from './__mocks__/imagesMock.js';
import MainPhoto from '../client/index.jsx';

configure({ adapter: new Adapter() });

describe('MainPhoto', () => {
  const component = mount(<MainPhoto />);
  component.state().images = images;
  component.state().mainImage = images[0];

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

  test('Renders correct number of buttons', (done) => {
    expect(component.find('button').length).toBe(2);
    done();
  });
});
