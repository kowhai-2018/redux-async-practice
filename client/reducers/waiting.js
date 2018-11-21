import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_JOKE,
  RECEIVE_JOKE} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_POSTS:
      return false

    case REQUEST_JOKE:
      return true

    case RECEIVE_JOKE:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
