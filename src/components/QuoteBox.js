import React, { Component } from 'react';
import { connect } from 'react-redux';
import Author from './Author';
import Text from './Text';
import NewQuote from './NewQuote';
import TweetQuote from './TweetQuote';
import { fetchQuote } from '../actions';

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


class QuoteBox extends Component {
  componentDidMount() {
    this.props.fetchQuote();
  }

  render() {
  return (
    <div id="quote-box">
      {loaded()}
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchQuote: () => dispatch(fetchQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);