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
    let heroesData = null
    if (!loading && !error) {
      heroesData = heroes.map(hero => (
        <h1 key={hero.localized_name} style={{marginTop: '0px'}}><img src={'https://api.opendota.com' + hero.icon} alt="hero-icon"/><Link to={'/hehe/'+hero.localized_name}>{hero.localized_name}</Link></h1>
      ))
    }
    return (
      <div style={{backgroundColor: '#333', marginTop: '0px'}}>
        {loading && <h1 style={{color: "white"}}>Tunggu dulu yach . . .</h1>}
        {error && <h1>Sorik lah</h1>}
        {heroesData}
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