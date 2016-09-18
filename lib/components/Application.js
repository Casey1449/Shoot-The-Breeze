import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend, reverse } from 'lodash';
import Header from './Header';
import MessageList from './Message-list';
import UserList from './User-list';
import LoginButton from './Login-button.js';
import InputForm from './Input-form';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      displayedMessages: [],
      draftMessage: '',
      user: null,
      sorted: true,
      filterText: ''
    };

    this.typeFilter = this.typeFilter.bind(this);

  }

  componentWillMount() {
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
    this.clearMessage();
  }

  clearMessage() {
    this.setState({ draftMessage: '' });
  }

  typeMessage(e) {
    this.setState({ draftMessage: e.target.value });
  }

  typeFilter(e) {
    this.setState({ filterText: e.target.value });
  }

  reverseMessages() {
    let reverse = _.reverse(this.state.messages)
    this.setState({ messages: reverse });
    this.sorted()
  }

  sorted() {
    this.setState({ sorted: !this.state.sorted })
  }

  render() {
    const { user, messages, draftMessage } = this.state;
    let currentUser = this.state.user;

    return (
      <div className="Application">
        <Header
          sortMessages={()=>this.reverseMessages()}
          sorted={this.state.sorted}
          filterText={this.state.filterText}
          typeFilter={this.typeFilter}
          />
        <section className="main-wrapper">
          <MessageList
           messages={this.state.messages}
            />
          <UserList
            messages={this.state.messages}
            />
        </section>
        <footer className="footer">
        { !currentUser ? <LoginButton /> :
         <InputForm
            user={this.state.user}
            draftMessage={this.state.draftMessage}
            addNewMessage={()=>this.addNewMessage()}
            typeMessage={(e)=>this.typeMessage(e)}
            clearMessage={()=>this.clearMessage()}
          /> }
        </footer>

      </div>
    )
  }
}
