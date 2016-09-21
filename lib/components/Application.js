import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend, reverse, uniqWith, sortBy, isEqual } from 'lodash';
import Header from './Header';
import MessageList from './Message-list';
import UserList from './User-list';
import LoginButton from './Login-button.js';
import InputForm from './Input-form';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
      sorted: true,
      filterText: '',
      selectedUserId: null
    };
  }

  componentWillMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  // componentWillUpdate() {
  //   // var node = ReactDOM.findDOMNode(MessageList);
  //   var node = this.getDOMNode(MessageList);
  //   this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  // }
  //
  // componentDidUpdate() {
  //   if (this.shouldScrollBottom) {
  //     // var node = ReactDOM.findDOMNode(MessageList);
  //     var node = this.getDOMNode(MessageList);
  //
  //     node.scrollTop = node.scrollHeight;
  //   }
  // }

  addNewMessage() {
    const { user, draftMessage } = this.state;
    console.log(this.state.messages);

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

  typeFilter(e, div) {
    this.setState({ filterText: e.target.value });
    div.scrollTop = div.scrollHeight;
  }

  reverseMessages() {
    let reverse = _.reverse(this.state.messages);
    this.setState({ messages: reverse });
    this.sorted();
  }

  sorted() {
    this.setState({ sorted: !this.state.sorted });
  }

  selectUser(key) {
    let id = this.state.selectedUserId;
    let val = (key === id) ? null : key;
    this.setState({ selectedUserId: val });
  }

  search(m){
    let text = this.state.filterText.toUpperCase();
    var message = m.user.displayName.toUpperCase().includes(text);
    var user = m.content.toUpperCase().includes(text);
    return (message || user);
  }

  filterById(m){
    let id = this.state.selectedUserId;
    return (!id || m.user.uid === id);
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
          typeFilter={(e)=>this.typeFilter(e)}
          />
        <section className="main-wrapper">
          <MessageList
           messages={this.state.messages}
           search={(m)=>this.search(m)}
           filterById={(m)=>this.filterById(m)}
            />
          <UserList
            selectUser={(e)=>this.selectUser(e)}
            messages={this.state.messages}
            user={this.state.user}
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
