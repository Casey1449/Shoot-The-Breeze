import React, { Component } from 'react';
// import { uniqWith, isEqual, sortBy } from 'lodash';
let _ = require('lodash');


class UserList extends Component {

  render() {

    let uniqueUsers = _.uniqWith(this.props.messages.map(m => m.user), _.isEqual);
    let sortedUniques = _.sortBy(uniqueUsers, function(user) { return user.displayName; });

    return (
      <aside className="user-list-container">
        <h1 className="user-list-title">Users</h1>
        <ul className="user-list">
          { (sortedUniques.map(m =>
                                <li key={m.uid}
                                    value={m.uid}
                                    onClick={this.props.selectUser.bind(null, m.uid)}>
                                  <p className="sender">
                                    {m.displayName}
                                    {" "}
                                    {m.email}
                                  </p>
                                </li>)) }
        </ul>
      </aside>
    )
  }

}

export default UserList
