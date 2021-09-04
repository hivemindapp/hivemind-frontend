import React from 'react';
import { formatDateCreated } from '../../utils/formatDateCreated';
import './PostedBy.css';
import { Post, Details, CommentType } from '../../utils/types';
import { baseURL } from '../../index';
interface PostedByProps {
  post: Post | Details | CommentType;
}

export const PostedBy: React.FC<PostedByProps> = ({ post }) => {
  const { createdAt } = post;
  const { avatar, username } = post.user;

  return (
    <div className='user-info'>
      <img
        className='avatar'
        src={`${baseURL}${avatar}`}
        alt={`${username}'s avatar`}
      />
      <p>
        Posted by {username} {formatDateCreated(createdAt)}
      </p>
    </div>
  );
};
