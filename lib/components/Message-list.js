import React, { Component } from 'react'
const moment = require('moment');

class MessageList extends Component {


  render() {

    let displayMessages = this.props.messages.filter(this.props.search);

    return (
      <section className="message-list-container">
        <ul>
          { displayMessages.map(m => <li key={m.key}>
                                        <span className="time-stamp">{moment(m.createdAt).format('MMMM D, h:mma')} </span>
                                        <span className="sender">{m.user.displayName}</span>
                                        <p className="message-body">{m.content}</p>
                                        </li>) }
        </ul>
      </section>
    )
  }
}

export default MessageList
