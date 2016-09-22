const React = require('react');
const ReactDOM = require('react-dom');

module.exports = (props) => {
  return (
    <input
      className={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  )
}
