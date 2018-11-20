import React from 'react'

const Post = ({title, summary}) => (
  <React.Fragment>
    <h3>{title}</h3>
    <p>{summary}</p>
  </React.Fragment>
)

export default Post
