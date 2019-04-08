import React from 'react';
import { connect } from 'react-redux';

const Text = (props) => {
  return (
    <h2 id="text">Quote: {props.quote}</h2>
  )
}

const mapStateToProps = state => {
  return {
    quote: state.quote
  }
}

export default connect(mapStateToProps)(Text);