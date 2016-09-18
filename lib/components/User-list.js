import React, { Component } from 'react'

class UserList extends Component {
  render() {
    return (
      <aside className="user-list-container">
        <h1 className="user-list-title">Users</h1>
        <ul className="user-list">
          { this.props.messages.map(m => <li key={m.user.uid}>
                                        <p className="sender">{m.user.displayName}
                                          {" "}
                                          ({m.user.email})
                                        </p>
                                        </li>) }
        </ul>
      </aside>
    )
  }

}

export default UserList
