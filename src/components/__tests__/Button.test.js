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

describe('When a location is passed to it',()=>{

  let mountedButton;
  let props;

  beforeEach(() => {

    props = {
      location: 'Location1'
    }

    mountedButton = shallow(<Button {...props} />)

  })

  it('displays the locations', () => {

    const locName = mountedButton.find('.location-button');
    expect(locName.text()).toEqual('Location1')

  })

  it('call a function passed to it when clicked', () => {

    const mockCallBack = jest.fn();

    const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack}/>)
    mountedButtonWithCallback.find('button').simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);

  })

})

describe('When a location not is passed to it',()=>{

  let mountedButton;
  let props;

  beforeEach(() => {

    props = {
      location: undefined
    }

    mountedButton = shallow(<Button {...props} />)

  })

  it('displays the locations', () => {

    const locName = mountedButton.find('.location-button');
    expect(locName.text()).toEqual('All location')

  })

})