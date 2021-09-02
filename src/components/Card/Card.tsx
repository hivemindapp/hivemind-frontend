import React from 'react';
import { Post } from '../../utils/types';
import { NavLink } from 'react-router-dom';
import { PostedBy } from '../PostedBy/PostedBy';
import './Card.css';

interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  const { id, title, image, description } = post;
  return (
    <NavLink to={`/posts/${id}`} className='nav-link'>
      <button className='card'>
        <h2>{title}</h2>
        <PostedBy post={post} />
        <div className='preview-container'>
          {!!image && <img className='post-img' src={image} alt={`${title}`} />}
          {!image && <p className='post-desc'>{description}</p>}
        </div>
      </button>
    </NavLink>
  );
};
