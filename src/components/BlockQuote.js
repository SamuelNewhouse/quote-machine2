import React from 'react';

const BlockQuote = (props) => {
  return <blockquote className="blockquote p-3 rounded"> {props.children} </blockquote>
}


export default BlockQuote;