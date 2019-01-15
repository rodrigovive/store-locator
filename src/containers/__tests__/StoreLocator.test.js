import React from 'react';
import ReactDOM from 'react-dom';
import StoreLocator from '../StoreLocator';
import {shallow} from 'enzyme'

describe("Store Locator",function () {

  let mountedStoreLocator;

  beforeEach(() => {

    mountedStoreLocator = shallow(<StoreLocator />)

  })

  it('renders without crashing', () => {

    let mountedStoreLocator = shallow(<StoreLocator />)

  });

  it('renders a header',() => {

    const headers = mountedStoreLocator.find('Header')
    expect(headers.length).toBe(1);

  })

  it('renders two buttons',() => {

    const buttons = mountedStoreLocator.find('Button')

    expect(buttons.length).toBe(2);

  })

  it('renders a map', () => {

    const maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);

  })

})

