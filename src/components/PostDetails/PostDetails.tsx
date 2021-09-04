import React, { useEffect, useState } from 'react';
import { GET_POST_DETAILS } from '../../index';
import { useQuery } from '@apollo/client';
import { Details } from '../../utils/types';
import { PostedBy } from '../PostedBy/PostedBy';
import { Comments } from '../Comments/Comments';
import { PostContent } from '../PostContent/PostContent';
import './PostDetails.css';

interface PostDetailsProps {
  id: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ id }) => {
  const [details, setDetails] = useState<Details | null>(null);
  const { data, loading, error } = useQuery(GET_POST_DETAILS, {
    variables: { id }
  });

  useEffect(() => {
    if (!loading && data) {
      setDetails(data.post);
    }
  }, [data, loading]);

  return (
    <>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading post...</p>}
      {details && !loading && !error && (
        <main className='post-details-section'>
          <section className='post-content'>
            <h2>{details.title}</h2>
            <PostedBy post={details} />
            <PostContent details={details} />
          </section>
          <Comments comments={details.comments} />
        </main>
      )}
    </>
  );
};
