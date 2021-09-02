import React from 'react';
import { User } from '../App/App';
import './UserInfo.css';

interface UserInfoProps {
  user: User;
  formatDateCreated: () => string;
}

export const UserInfo: React.FC<UserInfoProps> = ({
  user,
  formatDateCreated
}) => {
  return (
    <div className='user-info'>
      <img
        className='avatar'
        src={user.avatar}
        alt={`${user.username}'s avatar`}
      />
      <p>
        Posted by {user.username} {formatDateCreated()}
      </p>
    </div>
  );
};
