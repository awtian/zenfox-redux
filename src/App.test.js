import React from 'react';
import App from './App';

import { shallow } from 'enzyme'

const wrapper = shallow(<App />)

// console.log(wrapper.debug())

test('it should render correctly', () => {
  expect(wrapper).toHaveLength(1)
})

test('should have a switch', () => {
  const switchOnWrapper = wrapper.find('Switch')
  expect(switchOnWrapper).toHaveLength(1)
} )