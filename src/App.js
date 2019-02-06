import React, { Component } from 'react';
import logo from './logo.svg';
import {
        BrowserRouter as Router,
        Route,
        Link,
        Switch
       } from 'react-router-dom'
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
// Containers 
import Home from './containers/Home'
import About from './containers/About'

class App extends Component {
  state = {
    cond: false,
  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
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
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route path='/hehe/:name' component={(props) =>{ props.history.push('/about')
                                                            return <h1>{JSON.stringify(props)}</h1>
                                                            }} />
              <Route component={() => <h1>404</h1>} />
            </Switch>
          </div>
        </Router>

      </Provider>
    );
  }
}

export default App;
