import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';

class App extends Component {

  render() {
    return (
      <>
        <h1>Random Wikiquotes</h1>
        <QuoteBox />
      </>
    );
  }
}

export default App;