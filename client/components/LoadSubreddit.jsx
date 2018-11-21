import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, fetchDog} from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subreddit : 'newzealand'
  }

  onChangeHandler = e => {
    this.setState({
      subreddit: e.target.value
    })
  }

  render () {
    return (
      <React.Fragment>
        <input type='text' placeholder='Type the name of the subreddit' value={this.state.subreddit} onChange={this.onChangeHandler} />
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
          Fetch Posts
        </button>
        <button onClick={() => this.props.dispatch(fetchDog())}>
          Get a Dog
        </button>
      </React.Fragment>
    )
  }
}

export default connect()(LoadSubreddit)
