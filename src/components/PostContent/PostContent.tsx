import React from 'react';
import { Link } from 'react-router-dom';
import './PostContent.css';
import { Details } from '../../utils/types';
import { baseURL } from '../../index';
import { PostedBy } from '../PostedBy/PostedBy';

interface PostContentProps {
  details: Details;
}

export const PostContent: React.FC<PostContentProps> = ({ details }) => {
  const renderImages = (imageUrls: string[]) => {
    return imageUrls.map((url) => {
      return (
        <img
          src={`${baseURL}${url}`}
          alt={`User upload to go with post titled: ${details.title}`}
        />
      );
    });
  };
  return (
    <>
      <section className="post-content">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i>
          Back
        </Link>
        <h2 className="post-content-title">{details.title}</h2>
        <PostedBy post={details} />
        <div className="description-wrapper">
          <p className="post-content-description">{details.description}</p>
        </div>
        {!!details.imageUrls.length && renderImages(details.imageUrls)}
      </section>
    </>
  );
};
