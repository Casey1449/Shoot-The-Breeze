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
        <span className="character-counter">{this.props.draftMessage.length}</span>
        <button className="submit-button"
                disabled={!this.props.draftMessage}
                onClick={this.props.addNewMessage}>
                Submit
        </button>
        <button className="clear-button"
                disabled={!this.props.draftMessage}
                onClick={this.props.clearMessage}>
                Clear        
        </button>
      </div>
    )
  }
}

export default InputForm
