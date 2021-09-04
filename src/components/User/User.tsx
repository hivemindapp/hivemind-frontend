import React, { useState } from 'react';
import './User.css';
import { UserType } from '../../utils/types';

// import { GET_USER } from '../../index';
// import { useQuery } from '@apollo/client';

export const User: React.FC = () => {
  const [user, setUser] = useState<UserType[] | []>([]);
  // const { loading, error, data } = useQuery(GET_USER);

  // const randomize = (data: []) => {
  //   let randomNum = Math.floor(Math.random() * data.length);
  //   let randomUser = data[randomNum];
  //   setUser(randomUser);
  // };

  return (
    <div>
      {/* <img className="avatar" src={user.avatar} alt={`${user}'s avatar`} /> */}
      <h3 className="user-greeting">Welcome back my darling</h3>
    </div>
  );
};
