import React from 'react';
import { Post } from '../../utils/types';
import { NavLink } from 'react-router-dom';
import { PostedBy } from '../PostedBy/PostedBy';
import { baseURL } from '../../index';
import './Card.css';
interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  const { id, title, imageUrls, description } = post;
  return (
    <NavLink to={`/posts/${id}`} className='nav-link'>
      <button className='card'>
        <h2>{title}</h2>
        <PostedBy post={post} />
        <div className='preview-container'>
          {!!imageUrls.length && (
            <img
              className='post-img'
              src={`${baseURL}${imageUrls[0]}`}
              alt={`${title}`}
            />
          )}
          {!imageUrls.length && <p className='post-desc'>{description}</p>}
        </div>
      </button>
    </NavLink>
  );
};
