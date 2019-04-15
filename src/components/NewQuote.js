import React from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

const NewQuote = ({ fetchQuote, value = "New Quote" }) => {
  return (
    <span className="flex-grow-1 text-right">
      <button className="hovertip btn btn-dark" id="new-quote" onClick={fetchQuote}>
        {value}
        <span className="hovertiptext hovertip-right rounded">Get new quote.</span>
      </button>
    </span>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuote: () => dispatch(fetchQuote())
  }
}

export default connect(null, mapDispatchToProps)(NewQuote);