import React, { useEffect, useState } from 'react';
import { GET_POST_DETAILS } from '../../index';
import { useQuery } from '@apollo/client';
import { Details } from '../../utils/types';
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
    console.log(id);

    if (!loading && data) {
      setDetails(data.post);
    }
  }, [data, loading]);

  return (
    <>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading post...</p>}
      {details && !loading && !error && (
        <main className="post-details-section">
          <PostContent details={details} />
          <Comments comments={details.comments} />
        </main>
      )}
    </>
  );
};
