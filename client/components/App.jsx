import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Dog from './Dog'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <Dog />
    <SubredditList />
  </div>
)

export default App
