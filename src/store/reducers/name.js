const defaultState = {
  name: 'ZenFox',
  show: true
}

export default function (state=defaultState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'TOGGLE_SHOW':
      return ({
        ...state,
        show: !state.show,
      })
    case 'CHANGE_NAME':
      return ({
        ...state,
        name: payload
      })
    default:
      return state
  }
}
