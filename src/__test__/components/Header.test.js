import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from  'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header/ >', () => {
  
  test('Header component render', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  test('Header title render', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    )
    const title = header.find(".Header-title").text(); 
    expect(title).toEqual("Platzi Store");
  });
});

describe('Header Snapshot', () => {
  test('Test header Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});