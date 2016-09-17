import React, { Component } from 'react'

class MessageList extends Component {
  render() {
    return (
      <section className="message-list-container">
        <ul>
          { this.props.messages.map(m => <li key={m.key}>
                                        <span className="timestamp">{m.createdAt}</span>
                                        <span className="sender">{m.user.displayName}</span>
                                        <p className="body">{m.content}</p>
                                        </li>) }
        </ul>
      </section>
    )
  }
}

export default MessageList
