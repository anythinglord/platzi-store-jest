import React from 'react';
import { mount } from 'enzyme';
import { create } from  'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer/ >', () => {
  const footer = mount(<Footer />);
  test('Footer component render', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer title render', () => {
    const title = footer.find(".Footer-title").text(); 
    expect(title).toEqual("Platzi Store");
  });
});

describe('Footer Snapshot', () => {
  test('Test component UI', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});