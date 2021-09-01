import React from 'react';

interface PostDetailsProps {
  id: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ id }) => {
  return <h1>{id}</h1>;
};
