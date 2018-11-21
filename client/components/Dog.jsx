import React from 'react'
import {connect} from 'react-redux'

// import Post from './Post'

const Dog = (props) => (
  <div>
    {/* {this.props.dog ? <img src={this.props.dog}/>} */}
    <img src={props.dog}/>
  </div>
)

const mapStateToProps = (state) => {
  return {
    dog: state.dog
  }
}

export default connect(
  mapStateToProps
)(Dog)
