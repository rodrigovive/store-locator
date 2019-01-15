import React from 'react'
import {shallow} from 'enzyme'
import Map from '../Map'

it('render without crashing',() => {
  let mountedMap = shallow(<Map />)
})
