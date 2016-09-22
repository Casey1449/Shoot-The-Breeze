import React, { Component } from 'react';
let _ = require('lodash');


class UserList extends Component {
redDot(uid) {
  if (this.props.user === null){
    return '';
  }
  if (this.props.user.uid === uid) {
    return "🔴 ";
  }
}

  render() {

    let uniqueUsers = _.uniqWith(this.props.messages.map(m => m.user), _.isEqual);
    let sortedUniques = _.sortBy(uniqueUsers, function(user) { return user.displayName; });

    return (
      <aside className="user-list-container">
        <h1 className="user-list-title">Users</h1>
        <ul className="user-list">
          { (sortedUniques.map(m =>
                                <li
                                    className="user-list-user"
                                    key={m.uid}
                                    value={m.uid}
                                    onClick={this.props.selectUser.bind(null, m.uid)}>
                                  {this.redDot(m.uid)}
                                  {m.displayName.split(' ')[0]}
                                  {" "}
                                  ({m.email})
                                </li>)) }
        </ul>
      </aside>
    )
  }

}

export default UserList
