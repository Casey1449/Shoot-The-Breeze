import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';

module.exports = (props) => {
  return(
    <button
      className="login-button"
      onClick={()=>signIn()}>
      Login
    </button>
  )
}
