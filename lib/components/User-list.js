import React, { Component } from 'react'
import { map, uniq, uniqWith, isEqual } from 'lodash';


class UserList extends Component {

  render() {

    return (
      <aside className="user-list-container">
        <h1 className="user-list-title">Users</h1>
        <ul className="user-list">
          { (_.uniqWith(this.props.messages.map(m => m.user), _.isEqual))
              .map(m => <li key={m.uid}>
                          <p className="sender">{m.displayName}
                              {" "}
                              ({m.email})
                          </p>
                        </li>) }
        </ul>
      </aside>
    )
  }

}

export default UserList
