import React from 'react';
import App from '../App';
import {shallow} from 'enzyme'

describe("App",function () {

  it('renders without crashing', () => {

    let mountedApp = shallow(<App />)
  });

  it('renders a Store Locator', () => {

    //let mountedApp = shallow(<App />)


  })
})