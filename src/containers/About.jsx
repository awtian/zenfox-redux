import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//actions
import { toggleShow, changeName } from '../store/reducers/name/actions'

class About extends Component {
  render() {
    const { name, show, toggleShow, changeName } = this.props
    return (
      <div>
        <h1> Ini About</h1>
        {show && <h2> {name} </h2>}
        <button onClick={toggleShow}>Toggle Cuy</button>
        <button onClick={() => changeName('Hacktiv8')}>h3h3h3</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  show: state.show
})

const mapDispatchToProps = (dispatch) => bindActionCreators({toggleShow, changeName}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)