import React from 'react';
import './Cards.css';
import { Posts } from '../App/App';

interface CardsProps {
  posts: Posts | {};
}

export const Cards: React.FC<CardsProps> = ({ posts }) => {
  console.log(posts);
  return <div></div>;
};
