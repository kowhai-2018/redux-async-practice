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

        <div className='threadTitle'>{this.props.title}</div>
        <div className='date'>{this.converter(this.props.date).toString()}</div>
        <div>{this.props.text}</div><br />

      </React.Fragment>
    )
  }
}

export default Post
