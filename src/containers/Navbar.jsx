import React, { Component } from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <main style={{display: "flex", justifyContent:"space-between", alignItems:'center', width: "100vw"}}>
              <div style={{display: "flex"}}>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                  <code>Redux time</code>
                </p>
              </div>
              <div style={{display:"flex", marginRight: '30px'}}>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
              </div>
            </main>
          </header>
      </div>
    )
  }
}
