import React, { Component } from 'react';
import Button from './Button';
import Input from './Input-field';


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
          <Input
           placeholder="Message"
           name="user-message"
           value={this.props.draftMessage}
           handleChange={this.props.typeMessage}
          />
          <span className="character-counter">{140 - this.props.draftMessage.length}</span>
          <Button
            name="submit-button"
            disabled={this.disableSubmit()}
            handleClick={this.props.addNewMessage}
            text='Submit' />
          <Button
            name="clear-button"
            disabled={!this.props.draftMessage}
            handleClick={this.props.clearMessage}
            text="Clear" />
        </section>
      </div>
    )
  }
}

export default InputForm
