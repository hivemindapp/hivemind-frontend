import React from 'react';
import { Post } from '../App/App';
import { NavLink } from 'react-router-dom';
import 'dayjs';
import './Card.css';
import dayjs from 'dayjs';

interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  const formatDateCreated = () => {
    let now = dayjs();
    let createdAt = dayjs(post.createdAt);
    let diff = now.diff(createdAt, 'hours');

    if (diff >= 24) {
      let time = dayjs(post.createdAt).format('h:mm a');
      let date = dayjs(post.createdAt).format('MMMM D, YYYY');
      return `at ${time} on ${date}`;
    } else if (diff === 0) {
      return 'just now';
    } else if (diff === 1) {
      return `${diff} hr ago`;
    } else {
      return `${diff} hours ago`;
    }
  };

  return (
    <NavLink to={`/posts/${post.id}`}>
      <button className='card'>
        <h2>{post.title}</h2>
        <div className='user-info'>
          <img
            className='avatar'
            src={post.user.avatar}
            alt={`${post.user.username}'s avatar`}
          />
          <p>
            Posted by {post.user.username} {formatDateCreated()}
          </p>
        </div>
        <div className='preview-container'>
          {!!post.image && (
            <img className='post-img' src={post.image} alt={`${post.title}`} />
          )}
          {!post.image && <p className='post-desc'>{post.description}</p>}
        </div>
      </button>
    </NavLink>
  );
};
