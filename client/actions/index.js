import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_JOKE = 'REQUEST_JOKE'
export const RECEIVE_JOKE = 'RECEIVE_JOKE'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export const requestJoke = () => {
  return {
    type: REQUEST_JOKE
  }
}

export const receiveJoke = (joke) => {
  return {
    type: RECEIVE_JOKE,
    joke
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchJoke () {
  return (dispatch) => {
    dispatch(requestJoke())
    return request
      .get('https://geek-jokes.sameerkumar.website/api')
      .then(res => {
        dispatch(receiveJoke(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}



