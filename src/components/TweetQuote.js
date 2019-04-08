import React from 'react';
import { connect } from 'react-redux';

const TweetQuote = ({ author, quote }) => {
  const textURI = encodeURIComponent('"' + quote + '" - ' + author);
  const tweetURL = "https://twitter.com/intent/tweet?text=" + textURI;

  return (
    <a id="tweet-quote" href={tweetURL} target="_blank" rel="noopener noreferrer">Tweet</a>
  )
}

const mapStateToProps = state => {
  return {
    author: state.author,
    quote: state.quote
  }
}

export default connect(mapStateToProps)(TweetQuote);