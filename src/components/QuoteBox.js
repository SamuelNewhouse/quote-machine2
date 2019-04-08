import React from 'react';
import { connect } from 'react-redux';
import Author from './Author';
import Text from './Text';
import NewQuote from './NewQuote';
import TweetQuote from './TweetQuote';

const loaded = () => {
  return (
    <>
      <Text />
      <Author />
      <NewQuote />
      <TweetQuote />
    </>
  )
}

const QuoteBox = props => {
  return (
    <div id="quote-box">
      {loaded()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps)(QuoteBox);