import React from 'react';
import { NavLink } from 'react-router-dom';
import bee from '../../images/bee.png';
import './Header.css';
import { User } from '../User/User';
import { UserType } from '../../utils/types';

interface HeaderProps {
  user: UserType | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header>
      <NavLink to='/'>
        <img src={bee} alt='round smiling bee' className='logo' />
      </NavLink>
      <h1>HiveMind</h1>
      {user && <User user={user} />}
    </header>
  );
};
