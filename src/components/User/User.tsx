import React, { useState } from 'react';
import './User.css';

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const [user, setUser] = useState<{}>({});

  const randomize = (data: []) => {
    let randomNum = Math.floor(Math.random() * data.length);
    let randomUser = data[randomNum];
    setUser(randomUser);
  };

  return (
    <div>
      {/* <img className="avatar" src={user.avatar} alt={`${user}'s avatar`} /> */}
      <h3 className="user-greeting">Welcome back my darling</h3>
    </div>
  );
};
