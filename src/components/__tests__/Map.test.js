import React from 'react'
import {shallow} from 'enzyme'
import Map from '../Map'


describe('Map',function () {

  let mountedMap;

  beforeEach(() => {

    mountedMap = shallow(<Map />)

  })

  it('render without crashing',() => {
    let mountedMap = shallow(<Map />)
  })

  it('contains an image',() => {

    const images = mountedMap.find('img');
    expect(images.length).toBe(1);

  })

})

