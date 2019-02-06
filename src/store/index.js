import { createStore } from 'redux';

// Reducers
import name from './reducers/name'

const store = createStore(name);

export default store;