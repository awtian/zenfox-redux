export function toggleShow () {
  return {type: 'TOGGLE_SHOW'}
}

export function changeName (name) {
  return {type: 'CHANGE_NAME', payload: name}
}