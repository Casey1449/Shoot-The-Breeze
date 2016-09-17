import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Header from './Header';
import MessageList from './Message-list';
import UserList from './User-list';
import Login from './Login'

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null
    };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.typeMessage = this.typeMessage.bind(this);
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });

    this.setState({ draftMessage: '' });
  }

  typeMessage(e) {this.setState({ draftMessage: e.target.value });}

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <Header/>
        <section className="main-wrapper">
          <MessageList
           messages={this.state.messages}
            />
          <UserList/>
        </section>
        <footer className="footer">
         <Login
          user={this.state.user}
          draftMessage={this.state.draftMessage}
          addNewMessage={this.addNewMessage}
          typeMessage={this.typeMessage}
          />
        </footer>

      </div>
    )
  }
}
