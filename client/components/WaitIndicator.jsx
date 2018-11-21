import React from 'react'
import {connect} from 'react-redux'

const WaitIndicator = (props) => {
  return (
    <div className='error'>
      {props.waiting && <div className="loader">Loading...</div>}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)
