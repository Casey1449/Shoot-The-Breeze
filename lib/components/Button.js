const React = require('react');
const ReactDOM = require('react-dom');

module.exports = (props) => {
   return (
    <button
      className={props.name}
      onClick={props.handleClick}
      disabled={props.disabled}>
      {props.text}
    </button>
  )
};
