import React from 'react';
import { Post } from '../App/App';
import './Card.css';

interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <button className='card'>
      <img src={post.attributes.photo} alt={`${post.attributes.title}`} />
      <h2>{post.attributes.title}</h2>
    </button>
  );
};
