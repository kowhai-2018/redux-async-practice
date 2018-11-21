import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const RECEIVE_DOG = 'RECEIVE_DOG'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

function sortAlphabetically (items) {
  // sort by name
  items.sort(function (a, b) {
    let nameA = a.title.toUpperCase() // ignore upper and lowercase
    let nameB = b.title.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })
  return items
}

export const receivePosts = (posts) => {
  let newPosts = posts.map(post => {
    let postEntry = {
      title: post.data.title,
      content: post.data.selftext,
      date: post.data.created_utc,
      url: post.data.url
    }
    return postEntry
  })

  return {
    type: RECEIVE_POSTS,
    posts: sortAlphabetically(newPosts)
  }
}

export const receiveDog = (dog) => {
  return {
    type: RECEIVE_DOG,
    message: dog.message
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
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

export function fetchDog () {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/dog/dog`)
      .then(res => {
        dispatch(receiveDog(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
