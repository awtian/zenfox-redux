import React from 'react'
import Jest from './Jest'
import { shallow } from 'enzyme'

const wrapper = shallow(<Jest />)

test('it should render correctly', () => {
  expect(wrapper).toHaveLength(1)
})

test('have one h1', () => {
  const h1OnWrapper = wrapper.find('h1')
  expect(h1OnWrapper).toHaveLength(1)
})

test('have one p', () => {
  const pOnWrapper = wrapper.find('p')
  expect(pOnWrapper).toHaveLength(1)
})

test('have one ul', () => {
  const ulOnWrapper = wrapper.find('ul')
  expect(ulOnWrapper).toHaveLength(1)
})

test('have three li inside a ul', () => {
  const ulOnWrapper = wrapper.find('ul')
  const liInsideUl = ulOnWrapper.find('li')
  expect(liInsideUl).toHaveLength(3)
})

// State Testing 

test('it should have todos state', () => {
  const todos = wrapper.state('todos')
  expect(todos).toHaveLength(3)
})

// Event Testing

test('Add Todo Should add todo', () => {
  const newTodo = {id: 4, name: 'TESTING'}
  wrapper.instance().addTodo(newTodo)
  const todos = wrapper.state('todos')
  expect(todos).toHaveLength(4)
})

test('removeTodo should delete two todo', () => {
  wrapper.instance().removeTodo(1)
  wrapper.instance().removeTodo(2)
  const todos = wrapper.state('todos')
  expect(todos).toHaveLength(2)
  expect(todos[1].name).toEqual('TESTING')
})

test('clicking delete button should trigger removal', () => {
  const deleteButton = wrapper.find('.deleteTodo').at(0)
  deleteButton.simulate('click')
  const todos = wrapper.state('todos')
  expect(todos).toHaveLength(1)
  expect(todos[0].name).toEqual('TESTING')
})

test('props', () => {
  const username = 'awtian'
  const wrapperWithNameProps = shallow(<Jest username={username}/>)
  const props = wrapperWithNameProps.instance().props
  // console.log(props)
  expect(props.username).toEqual(username)
})