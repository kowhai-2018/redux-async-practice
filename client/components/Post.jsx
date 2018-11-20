import React from 'react'

const Post = ({title, date, content, url}) => (
  <div>
    <h5><a href={url}>{date} - {title}</a> </h5>
    <br/>
    <p>
      {content}
    </p>
  </div>
)

export default Post
