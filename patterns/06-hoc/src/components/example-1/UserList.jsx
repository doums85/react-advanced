import React from 'react';
import HOC from './HOC';

const UsersList = ({ data }) => {

  return (
    <div>
      <div>
        {data.map((user) => (
          <div key={user.id}>
            <p>
              <strong>{user.name}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, 'users');

export default SearchUsers;
