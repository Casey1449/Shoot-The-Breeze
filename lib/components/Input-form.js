import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return(
      <div aria-role="form" className="MessageInput">
        <input
          placeholder="Message"
          value={this.props.draftMessage}
          onChange={this.props.typeMessage}
        />
        <span className="character-counter">140</span>
        <button className="submit-button" onClick={this.props.addNewMessage}>Submit</button>
        <button className="clear-button">Clear</button>
      </div>
    )
  }
}

export default InputForm
