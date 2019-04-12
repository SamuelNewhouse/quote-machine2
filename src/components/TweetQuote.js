import React from 'react';
import { connect } from 'react-redux';
import twitterLogo from '../images/twitter-logo.svg'

const TweetQuote = ({ author, quote }) => {
  const textURI = encodeURIComponent('"' + quote + '" - ' + author);
  const tweetURL = "https://twitter.com/intent/tweet?text=" + textURI;

  return (
    <a className="hovertip btn btn-dark" id="tweet-quote" href={tweetURL} target="_blank" rel="noopener noreferrer">
      <img src={twitterLogo} alt="Tweet this quote."></img>
      <span className="hovertiptext">Tweet this quote.</span>
    </a>
  )
}

const mapStateToProps = state => {
  return {
    author: state.author,
    quote: state.quote
  }
}

export default connect(mapStateToProps)(TweetQuote);