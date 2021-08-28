import React from 'react';
import { Post } from '../App/App';
import './Card.css';

interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  console.log(post);
  return (
    <button className='card'>
      <img src={post.image} alt={`${post.title}`} />
      <h2>{post.title}</h2>
    </button>
  );
};
