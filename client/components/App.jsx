import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Joke from './Joke'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <Joke />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
  </div>
)

export default App
