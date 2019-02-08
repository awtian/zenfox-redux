import axios from 'axios';

export function getHeroes () {
  return async (dispatch) => {
    try {
      dispatch(loading())
      const {data: payload} = await axios.get('https://api.opendota.com/api/heroStats')
      dispatch({type: 'GET_HEROES_SUCCESS', payload})
    }
    catch (e) {
      dispatch({type: 'GET_HEROES_ERROR'})
    }

  }
} 

function loading () {
  return {type: 'GET_HEROES_LOADING'}
}