import React, { Component } from 'react';
import InputForm from './Input-form'

class Login extends Component {
  render(){
    if (!this.props.user) {
      return(
        <button className="login-button">Login</button>
      )
    }
    return(
      <div>
        <p className="login-status-message">You are logged in as Casey</p>
        <InputForm
         draftMessage={this.props.draftMessage}
         addNewMessage={this.props.addNewMessage}
         typeMessage={this.props.typeMessage}
        />
      </div>
    )
  }
}

export default Login
