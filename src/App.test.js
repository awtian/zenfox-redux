import React from 'react';
import App from './App';

import { shallow } from 'enzyme'

describe('testing mounting', ()=>{
  const wrapper = shallow(<App />)
  test('it should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  test('it should have 6 route', () => {
    const routerInWrapper = wrapper.find('Route')
    expect(routerInWrapper).toHaveLength(6)
  })
})
