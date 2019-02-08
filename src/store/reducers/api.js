const defaultState = {
  heroes: [],
  loading: false,
  error: false
}

export default function (state=defaultState, action) {
  const {type, payload} = action
  
  switch (type) {
    case 'GET_HEROES_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'GET_HEROES_SUCCESS':
      return {
        ...state,
        loading: false,
        heroes: payload
      }
    case 'GET_HEROES_ERROR':
      return {
        ...state,
        error: true,
        loading: false
      } 
    default:
      return state
  }
}