import React from 'react';

const Fetching = () => {
  return (
    <>
      <div className="spinner-border mb-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <footer className="blockquote-footer"><cite>Getting random quote from <em>en.wikiquote.org</em>...</cite></footer>
    </>
  )
}

export default Fetching;