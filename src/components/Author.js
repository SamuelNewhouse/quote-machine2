import React from 'react';
import { connect } from 'react-redux';

const Author = props => {
  return (
    <h2 id="author">Author: {props.author}</h2>
  )
}

const mapStateToProps = state => {
  return {
    author: state.author
  }
}

export default connect(mapStateToProps)(Author);