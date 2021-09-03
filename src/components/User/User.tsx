import React, { useState } from 'react';
import './User.css';

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const [user, setUser] = useState([]);

  return (
    <div>
      {/* <img className="avatar" src={user.avatar} alt={`${user}'s avatar`} /> */}
      <h3 className="user-greeting">Welcome Back...`</h3>
    </div>
  );
};
