import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    curPage: 1,
  };
  render() {
    const { users } = this.props;
    return (
      <div>
        <Pagination />
        <ul className="users">
          {users.map((user) => (
            <User {...user} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
