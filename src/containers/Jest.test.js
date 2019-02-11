import React from 'react';
import Jest from './Jest';

import { shallow } from 'enzyme';

const wrapper = shallow(<Jest />)
test('render correctly', () => {
  expect(wrapper).toHaveLength(1)
})

test('Have a H1', () => {
  const h1InsideWrapper = wrapper.find('h1')
  expect(h1InsideWrapper).toHaveLength(1)
})

test('Have an ul', () => {
  const ulInsideWrapper = wrapper.find('ul')
  expect(ulInsideWrapper).toHaveLength(1)
})

test('Have 3 li inside an ul', () => {
  const ulInsideWrapper = wrapper.find('ul')
  const liInsideUl = ulInsideWrapper.find('li') 
  expect(liInsideUl).toHaveLength(3)
})

// Test State

test('its started with three todo on the state', () => {
  const todosState = wrapper.state('todos')
  expect(todosState).toHaveLength(3)
})


//test events 
test('it add new todo when newTodo is called', () => {
  const newTodo = {
    id: 4,
    name: 'Testing'
  }
  wrapper.instance().addTodo(newTodo)
  const todosState = wrapper.state('todos');
  expect(todosState).toHaveLength(4)

})

test('delete 2 todos', () => {
  wrapper.instance().removeTodo(1)
  wrapper.instance().removeTodo(2)
  const todosState = wrapper.state('todos')
  expect(todosState).toHaveLength(2)
})

test('simulate click on delete button', () => {
  const button = wrapper.find('.deleteTodo').at(0)
  button.simulate('click')
  const todosState = wrapper.state('todos')
  expect(todosState).toHaveLength(1)
})

//props testing
test('recieve props username', () => {
  const username = 'awxm'
  const wrapperWithProps = shallow(<Jest username={username}/>)
  const usernameProps = wrapperWithProps.instance().props.username
  expect(usernameProps).toBe(username)
  const isAString = typeof usernameProps === 'string'
  expect(isAString).toBeTruthy()
})