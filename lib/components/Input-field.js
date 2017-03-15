const React = require('react');
const ReactDOM = require('react-dom');

module.exports = (props) => {

  const keyBoardSubmit = (e) => {
    e.key === 'Enter' && props.handleEnterSubmit();  
  }

  return (
    <input
      className={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onKeyPress={(e) => {keyBoardSubmit(e)}}
      onChange={props.handleChange}
    />
  )
}
