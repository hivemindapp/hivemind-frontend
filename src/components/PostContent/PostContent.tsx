import React from 'react';
import './PostContent.css';
import { Details } from '../../utils/types';
import { baseURL } from '../../index';

interface PostContentProps {
  details: Details;
}

export const PostContent: React.FC<PostContentProps> = ({ details }) => {
  return (
    <>
      {details.imageUrls && (
        //want to have more than index 0 if there are multiple
        <img
          src={`${baseURL}${details.imageUrls[0]}`}
          alt={`User upload to go with post titled: ${details.title}`}
        />
      )}
      <h2>Description</h2>
      <p>{details.description}</p>
    </>
  );
};
