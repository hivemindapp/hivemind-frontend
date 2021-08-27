import React from 'react';
import { Post } from '../App/App';

interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  console.log('posttt', post);
  return <></>;
};
