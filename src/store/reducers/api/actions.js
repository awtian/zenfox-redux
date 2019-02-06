import axios from 'axios';
import {changeName} from '../name/actions'
export function getHeroes () {
  return dispatch => {
    dispatch(loading())
    axios.get('https://api.opendota.com/api/heroStats')
      .then(({data}) => {
        dispatch({type: 'GET_HEROES_SUCCESS', payload: data})
        dispatch(changeName('patria mau ke gading'))
      })
      .catch(e => dispatch({type: 'GET_HEROES_ERROR'}))
  }
} 

function loading () {
  return {type: 'GET_HEROES_LOADING'}
}