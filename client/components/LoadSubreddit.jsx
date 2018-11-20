import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subreddit : 'newzealand',
    countryForm : ''
  }

  onChangeHandler = e => {
    this.setState({
      countryForm: e.target.value
    })
  }

  render () {
    return (
      <React.Fragment>
        <input type='text' placeholder='Type the name of the subreddit' value={this.state.countryForm} onChange={this.onChangeHandler} />
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.countryForm))}>
          Fetch Posts
        </button>
      </React.Fragment>
    )
  }
}

export default connect()(LoadSubreddit)
