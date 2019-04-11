import React from 'react';
import { connect } from 'react-redux';

const Author = props => {
  const author = props.author;
  return (
    <footer className="blockquote-footer"><cite id="author" title={author}>{author}</cite></footer>
  )
}

const mapStateToProps = state => {
  return {
    author: state.author
  }
}

export default connect(mapStateToProps)(Author);