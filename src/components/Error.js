import React from 'react';
import NewQuote from './NewQuote'

const Error = () => {
  return (
    <>
      <p><strong>Error</strong> getting quote from <em>en.wikiquote.org</em>.</p>
      <NewQuote value="Try Again" />
    </>
  )
}

export default Error;