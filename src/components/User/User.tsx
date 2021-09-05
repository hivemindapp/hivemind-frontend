import React from 'react';
import './User.css';
import { UserType } from '../../utils/types';
import { baseURL } from '../../index';
interface UserProps {
  user: UserType;
}
export const User: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      {user && (
        <div className='avatar-wrapper'>
          <img
            className='avatar header-av'
            id='headerAvatar'
            src={`${baseURL}${user.avatar}`}
            alt={`${user}'s avatar`}
          />
          <h3 className='user-greeting'>{user.username}</h3>
        </div>
      )}
    </>
  );
};
