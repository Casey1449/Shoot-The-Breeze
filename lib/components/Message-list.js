import React, { Component } from 'react';
const moment = require('moment');

class MessageList extends Component {

  componentWillUpdate() {
    var node = this.refs.list;
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  scrollDown() {
    if (this.shouldScrollBottom) {
      var node = this.refs.list;
      node.scrollTop = node.scrollHeight;
    }
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  componentWillReceiveProps() {
    this.scrollDown();
  }

  formatMessage(m) {

    let whom = m.user.uid === this.props.user.uid ? 'me' : 'other';

    return (
      <li className="message" key={m.key}>
        <img src={m.user.photoURL} alt="user google avatar" className="avatar"/>
        <div className="message-content-block">
          <span className={whom} >{m.user.displayName.split(' ')[0]}</span>
          <span className="time-stamp">{moment(m.createdAt).format('MMMM D, h:mma')} </span>
          <p className="message-body">{m.content}</p>
        </div>
      </li>
    )
  }

  render() {

    let filteredMessages = this.props.messages.filter(this.props.search);
    let shownMessages = filteredMessages.filter(this.props.filterById);

    return (
      <section className="message-list-container" ref="list">
        <ul>
          { shownMessages.map(m => this.formatMessage(m)) }
        </ul>
      </section>
    )
  }
}

export default MessageList
