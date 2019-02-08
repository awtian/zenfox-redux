import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunky from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// Reducers
import name from './reducers/name'
import api from './reducers/api'

const RootReducers = combineReducers({name, api})


const logger = (store) => (next) => (action) => {
    console.log('kita lagi dispatch', action)
    const done = next(action)
    console.log('store baru kita nich', store.getState())
    return done
}

const logger2 = (store) => (next) => (action) => {
    console.log('DISPATCH SETELAH THUNK', action)
    const done = next(action)
    console.log('STORE SETELAH THUNK', store.getState())
    return done
}

const store = createStore(RootReducers, {}, 
  composeWithDevTools(applyMiddleware(logger, thunky, logger2))
  );

export default store;