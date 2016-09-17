import React, { Component } from 'react'

class UserList extends Component {
  render() {
    return (
      <aside className="user-list-container">
        <h1 className="user-list-title">Users</h1>
        <ul className="user-list">
          <li>Casey</li>
          <li>Pete</li>
        </ul>
      </aside>
    )
  }

}

export default UserList
