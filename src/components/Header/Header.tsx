import React from 'react';
import { NavLink } from 'react-router-dom';
import bee from '../../images/bee.png';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={bee} alt="round smiling bee" className="logo" />
      </NavLink>
      <h1>HiveMind</h1>
      <NavLink to="/">Home</NavLink>
    </header>
  );
};
