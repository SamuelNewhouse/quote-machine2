import React from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

const NewQuote = ({ fetchQuote, value = "New Quote" }) => {
  return (
    <button id="new-quote" onClick={fetchQuote}>{value}</button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuote: () => dispatch(fetchQuote())
  }
}

export default connect(null, mapDispatchToProps)(NewQuote);