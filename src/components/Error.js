import React from 'react';
import NewQuote from './NewQuote'

const Error = () => {
  return (
    <>
      <h2><strong>Error</strong> getting quote from <em>en.wikiquote.org</em>.</h2>
      <NewQuote value="Try Again" />
    </>
  )
}

export default Error;