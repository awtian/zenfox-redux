import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    todos: [
      {id: 1, name: 'Bangun'},
      {id: 2, name: 'Mandi'},
      {id: 3, name: 'Makan'},
    ]
  }
  
  addTodo = (todo) => {
    this.setState({todos: this.state.todos.concat(todo)})
  }
  
  removeTodo = (todoid) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== todoid)})
  }

  render() {
    return (
      <div>
        <h1>Hello youngfox</h1>
        <p>Dibawah ini akan ada 3 list, {this.props.username}</p>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              {todo.name} 
              <button onClick={() => this.removeTodo(todo.id)} className='deleteTodo'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
