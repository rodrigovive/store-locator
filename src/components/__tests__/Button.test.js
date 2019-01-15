import React from 'react'
import {shallow} from 'enzyme'
import Button from '../Button'

it('render without crashing',function () {
  let mountedButton = shallow(<Button />)
})