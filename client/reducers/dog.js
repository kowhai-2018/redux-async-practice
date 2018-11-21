import {RECEIVE_DOG} from '../actions'

const initialState = ''
function dog (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DOG:
      return action.message

    default:
      return state
  }
}

export default dog
