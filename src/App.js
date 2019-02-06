import React, { Component } from 'react';
import {
        BrowserRouter as Router,
        Route,
        Switch
       } from 'react-router-dom'
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
// Containers 
import Home from './containers/Home'
import About from './containers/About'
import Navbar from './containers/Navbar'

class App extends Component {
  state = {
    cond: false,
  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route path='/hehe/:name' component={(props) => {
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
