import React from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

const NewQuote = props => {
  return (
    <button id="new-quote" onClick={props.fetchQuote}>New Quote</button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuote: () => dispatch(fetchQuote())
  }
}

export default connect(null, mapDispatchToProps)(NewQuote);