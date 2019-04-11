import React from 'react';
import NewQuote from './NewQuote'

const Error = () => {
  return (
    <>
      <h2>Error getting quote from Wikiquote.</h2>
      <NewQuote value="Try Again" />
    </>
  )
}

export default Error;