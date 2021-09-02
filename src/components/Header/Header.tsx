import React from 'react';
import bee from '../../images/bee.png';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header>
      <img src={bee} alt='round smiling bee' className='logo' />
      <h1>HiveMind</h1>
    </header>
  );
};
