import React, { Component } from 'react';
import InputForm from './Input-form'
import firebase, { reference, signIn } from '../firebase';

class Login extends Component {
  render(){
    if (!this.props.user) {
      return(
        <button className="login-button"
        onClick={()=>signIn()}
        >Login</button>
      )
    }
    return(
      <div>
        <p className="login-status-message">You are logged in as Casey</p>
        <InputForm
        clearMessage = {this.props.clearMessage}
         draftMessage={this.props.draftMessage}
         addNewMessage={this.props.addNewMessage}
         typeMessage={this.props.typeMessage}
        />
      </div>
    )
  }
}

export default Login

// user = this.props.user
//
// // { user ? <InputForm /> : <LoginButton /> }
