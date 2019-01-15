import React from 'react';
import Header from '../Header';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  let mountedHeader = shallow(<Header />)
});
