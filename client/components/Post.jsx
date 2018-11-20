import React from 'react'

class Post extends React.Component {
// dateTime = new Date(this.props.date * 1000)
  converter (utcDate) {
    const dateTime = new Date(utcDate * 1000)
    return dateTime
  }

  render () {
    return (
      <React.Fragment>
        <div>{this.props.title}</div>
        <div>{this.converter(this.props.date).toString()}</div>
        <br />
      </React.Fragment>
    )
  }
}

export default Post
