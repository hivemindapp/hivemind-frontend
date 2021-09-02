import React from 'react';
import { CommentType } from '../../utils/types';
import { Comment } from '../Comment/Comment';
import './Comments.css';

interface CommentsProps {
  comments: CommentType[];
}

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const makeCommentCards = (comments: CommentType[]) => {
    return comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />;
    });
  };

  return (
    <section className='comment-section'>
      <h2>Comments:</h2>
      {!!comments.length && makeCommentCards(comments)}
      {!comments.length && <p>No comments yet</p>}
    </section>
  );
};
