import React, { Component } from 'react'
import Anak from './Anak'

export default class Mamah extends Component {
  render() {
    return (
      <div>
        <h2>Ini Mamah</h2>
        <Anak theme={this.props.theme}/>
      </div>
    )
  }
}
