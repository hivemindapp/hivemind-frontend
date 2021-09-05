import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bee from '../../images/bee.png';
import './Header.css';
import { User } from '../User/User';
import { UserType } from '../../utils/types';

interface HeaderProps {
  user: UserType | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  const [inHover, setHover] = useState(false);

  return (
    <header>
      <NavLink
        to='/'
        className='link'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {inHover && (
          <div className='logo-wrapper'>
            <img src={bee} alt='round smiling bee' className='logo hover' />
            <h1>HiveMind</h1>
          </div>
        )}
        {!inHover && (
          <div className='logo-wrapper'>
            <img src={bee} alt='round smiling bee' className='logo' />
            <h1>HiveMind</h1>
          </div>
        )}
      </NavLink>
      {user && <User user={user} />}
    </header>
  );
};
