import React from 'react';
import Header from '../Header';
import {shallow} from 'enzyme'

describe("Header", function () {

  let mountedHeader;

  beforeEach(() => {

    mountedHeader = shallow(<Header />)

  })

  it('renders without crashing', () => {
    shallow(<Header />)
  });

  it('renders a logo', () => {

    const logoImg = mountedHeader.find('img[src="images/wired-brain-coffee-logo.png"]')
    expect(logoImg.length).toBe(1);

  })

})


