import React from 'react';
import { Post } from '../App/App';
import { NavLink } from 'react-router-dom';
import 'dayjs';
import './Card.css';
import { formatDateCreated } from '../../utils/formatDateCreated';

interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  const { id, title, user, image, description } = post;
  return (
    <NavLink to={`/posts/${id}`} className='nav-link'>
      <button className='card'>
        <h2>{title}</h2>
        <div className='user-info'>
          <img
            className='avatar'
            src={user.avatar}
            alt={`${user.username}'s avatar`}
          />
          <p>
            Posted by {user.username} {formatDateCreated(post)}
          </p>
        </div>
        <div className='preview-container'>
          {!!image && <img className='post-img' src={image} alt={`${title}`} />}
          {!image && <p className='post-desc'>{description}</p>}
        </div>
      </button>
    </NavLink>
  );
};
