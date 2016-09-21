import React, { Component } from 'react';

class InputForm extends Component {



  disableSubmit(){
    let chars = this.props.draftMessage.length;
    return (chars > 140 || chars < 1);
  }

  render() {
    return(
      <div aria-role="form" className="message-input">
        <section className="login-status">
        <p className="login-bar">Logged in as {this.props.user.displayName} ({this.props.user.email})</p>
        </section>
        <section className="send-messages">
        <input
          className="user-message"
          placeholder="Message"
          value={this.props.draftMessage}
          onChange={this.props.typeMessage}
        />
        <span className="character-counter">{140 - this.props.draftMessage.length}</span>
        <button className="submit-button"
                disabled={this.disableSubmit()}
                onClick={this.props.addNewMessage}>
                Submit
        </button>
        <button className="clear-button"
                disabled={!this.props.draftMessage}
                onClick={this.props.clearMessage}>
                Clear
        </button>
        </section>
      </div>
    )
  }
}

export default InputForm
