import React from 'react';
import { connect } from 'react-redux';
import googleLogo from '../images/google-logo.svg'

const TweetQuote = ({ author, quote }) => {
  const textURI = encodeURIComponent(quote + ' ' + author);
  const googleURL = "https://www.google.com/search?q=" + textURI;

  return (
    <a className="hovertip btn btn-dark ml-2" id="tweet-quote" href={googleURL} target="_blank" rel="noopener noreferrer">
      <img src={googleLogo} alt="Google this quote."></img>
      <span className="hovertiptext rounded">Google this quote.</span>
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