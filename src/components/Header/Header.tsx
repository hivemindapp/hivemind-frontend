import React from 'react';
import bee from '../../images/bee.png'
import "./Header.css"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <img src={bee} alt="cute-bee" className="logo"/>
      <h1>HiveMind</h1>
    </header>
  );
};
