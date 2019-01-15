import React from 'react'
import {shallow} from 'enzyme'
import Button from '../Button'

describe('Button',function () {

  let mountedButton = shallow(<Button />)

  beforeEach(() => {

    mountedButton = shallow(<Button />)

  })

  it('render without crashing',function () {
    let mountedButton = shallow(<Button />)
  })

  it('renders a button', () => {

    const button = mountedButton.find('button')
    expect(button.length).toBe(1);

  })

})

