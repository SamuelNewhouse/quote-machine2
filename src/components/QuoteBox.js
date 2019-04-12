import React, { Component } from 'react';
import { connect } from 'react-redux';
import Author from './Author';
import Text from './Text';
import NewQuote from './NewQuote';
import TweetQuote from './TweetQuote';
import Error from './Error';
import Fetching from './Fetching';
import { fetchQuote } from '../actions';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss'

const normalView = () => {
  return (
    <>
      <blockquote className="blockquote">
        <Text />
        <Author />
      </blockquote>
      <NewQuote />
      <TweetQuote />
    </>
  )
}

const getView = props => {
  if (props.error)
    return (
      <blockquote className="blockquote p-3">
        <Error />
      </blockquote>
    )

  if (props.isFetching)
    return (
      <blockquote className="blockquote p-3">
        <Fetching />
      </blockquote>
    )

  return normalView();
}

class QuoteBox extends Component {
  componentDidMount() {
    this.props.fetchQuote();
  }

  render() {
    return (
      <div id="quote-box">
        {getView(this.props)}
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