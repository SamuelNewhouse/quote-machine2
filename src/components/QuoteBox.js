import React, { Component } from 'react';
import { connect } from 'react-redux';
import Author from './Author';
import Text from './Text';
import NewQuote from './NewQuote';
import TweetQuote from './TweetQuote';
import GoogleQuote from './GoogleQuote';
import Error from './Error';
import Fetching from './Fetching';
import BlockQuote from './BlockQuote';
import { fetchQuote } from '../actions';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss'

const normalView = () => {
  return (
    <>
      <BlockQuote>
        <Text />
        <Author />
      </BlockQuote>
      <span className="d-flex px-3">
        <TweetQuote />
        <GoogleQuote />
        <NewQuote />
      </span>
    </>
  )
}

const getView = props => {
  if (props.error)
    return (
      <BlockQuote>
        <Error />
      </BlockQuote>
    )

  if (props.isFetching)
    return (
      <BlockQuote>
        <Fetching />
      </BlockQuote>
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