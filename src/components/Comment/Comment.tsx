import React from 'react';
import { CommentType } from '../../utils/types';
import { PostedBy } from '../PostedBy/PostedBy';
import './Comment.css';
interface CommentProps {
  comment: CommentType;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className='comment-card'>
      <PostedBy post={comment} />
      <p>{comment.content}</p>
    </div>
  );
};
