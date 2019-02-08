import React, { Component } from 'react'

import Mamah from './Mamah'

export default class Family extends Component {
  state = {
    theme: 'black'
  }

  render() {
    return (
      <div>
        <h1>Family</h1>
        <Mamah theme={this.state.theme}/>
      </div>
    )
  }
}
