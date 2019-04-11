import React from 'react';
import { connect } from 'react-redux';

const Text = (props) => {
  return (
    <p id="text">{props.quote}</p>
  )
}

const mapStateToProps = state => {
  return {
    quote: state.quote
  }
}

export default connect(mapStateToProps)(Text);