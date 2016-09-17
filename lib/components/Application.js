import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Header from './Header';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null
    }
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

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <Header/>
        <section className="main-wrapper">
          <section className="message-list-container">
            <ul>
              { this.state.messages.map(m => <li key={m.key}>
                                            <span className="timestamp">{m.createdAt}</span>
                                            <span className="sender">{m.user.displayName}</span>
                                            <p className="body">{m.content}</p>
                                            </li>) }
            </ul>
          </section>
          <aside className="user-list-container">
            <h1 className="user-list-title">Users</h1>
            <ul className="user-list">
              <li>Casey</li>
              <li>Pete</li>
            </ul>
          </aside>
        </section>
        <div>
          <p className="login-status-message">You are logged in as Casey</p>
        </div>
        <div>
          <button className="login-button">Login</button>
        </div>
        <div aria-role="form" className="MessageInput">
          <input
            placeholder="Message"
            value={this.state.draftMessage}
            onChange={(e) => this.setState({ draftMessage: e.target.value })}
          />
          <span className="character-counter">140</span>
          <button className="submit-button" onClick={() => this.addNewMessage()}>Submit</button>
          <button className="clear-button">Clear</button>
        </div>
      </div>
    )
  }
}
