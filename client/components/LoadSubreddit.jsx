import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subReddit: 'newzealand'
  }

  changeHandler = e => {
    this.setState({
      [ e.target.name ]: e.target.value
     })
  }

  render () {
    return (
  <div>
    <input type='text' name='subReddit' value={this.state.subReddit} onChange={this.changeHandler} />
    <button onClick={() => this.props.dispatch(fetchPosts(this.state.subReddit))}>
    Fetch Posts
    </button>
  </div>
    )}
}

export default connect()(LoadSubreddit)
