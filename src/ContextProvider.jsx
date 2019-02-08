import React, { Component, createContext } from 'react'

const MyContext = createContext()
export const {Provider, Consumer} = MyContext

export default class ContextProvider extends Component {
  state = {
    theme: 'black'
  }

  toWhite = () => {
    this.setState({theme: 'white'})
  }

  toBlack = () => {
    this.setState({theme: 'black'})
  }

  render() {
    const {toWhite, toBlack, state} = this
    return (
      <Provider value={{state: state, toWhite, toBlack}}>
        {this.props.children}
      </Provider>
    )
  }
}
