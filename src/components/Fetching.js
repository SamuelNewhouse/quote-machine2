import React from 'react';

const Fetching = () => {
  return (
    <>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p>...getting quote...</p>
    </>
  )
}

export default Fetching;