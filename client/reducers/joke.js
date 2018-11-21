import {RECEIVE_JOKE} from '../actions'

function joke (state = [], action) {
  switch (action.type) {
    case RECEIVE_JOKE:
      return action.joke

    default:
      return state
  }
}

export default joke
