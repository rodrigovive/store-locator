import React from 'react';
import ReactDOM from 'react-dom';
import StoreLocator from '../StoreLocator';
import {shallow} from 'enzyme'


it('renders without crashing', () => {

  let mountedStoreLocator = shallow(<StoreLocator />)

});
