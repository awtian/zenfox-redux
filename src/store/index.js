import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// Reducers
import name from './reducers/name'
import api from './reducers/api'

const RootReducers = combineReducers({name, api})

const store = createStore(RootReducers, {}, 
  composeWithDevTools(applyMiddleware(thunk))
  );

export default store;