import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//actions
import {getHeroes} from '../store/reducers/api/actions'
class Home extends Component {
  componentDidMount () {
    this.props.getHeroes()
  }

  render() {
    const {loading, error, heroes} = this.props
    return (
      <div style={{backgroundColor: '#333'}}>
        {loading && <h1>Tunggu dulu yach . . .</h1>}
        {error && <h1>Sorik lah</h1>}
        {heroes.map(hero => (
          <h1><Link to={'/hehe/'+hero.localized_name}>{hero.localized_name}</Link></h1>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.api.loading,
  heroes: state.api.heroes,
  error: state.api.error,
})

const mapDispatchToProps = (dispatch) => ({
  getHeroes: () => dispatch(getHeroes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)