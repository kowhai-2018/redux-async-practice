import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Joke from './Joke'
import JokeDisplay from './JokeDisplay'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <JokeDisplay />
    <Joke />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
  </div>
)

export default App
