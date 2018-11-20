import React from 'react'

const Post = ({title, summary}) => (
  <React.Fragment>
    <div>{title}</div>
    <div>{summary}</div>
  </React.Fragment>
)

export default Post
