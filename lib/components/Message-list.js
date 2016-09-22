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

  render() {

    let filteredMessages = this.props.messages.filter(this.props.search);
    let shownMessages = filteredMessages.filter(this.props.filterById);

    return (
      <section className="message-list-container" ref="list">
        <ul>
          { shownMessages.map(m => <li className="message"
                                       key={m.key}>
                                        <span className="time-stamp">{moment(m.createdAt).format('MMMM D, h:mma')} </span>
                                        <span className="sender">{m.user.displayName.split(' ')[0]}</span>
                                        <p className="message-body">{m.content}</p>
                                        </li>) }
        </ul>
      </section>
    )
  }
}

export default MessageList
