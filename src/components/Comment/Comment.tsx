import React from 'react';
import { CommentType } from '../../utils/types';

interface CommentProps {
  comment: CommentType;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return <p>I'm a comment</p>;
};
