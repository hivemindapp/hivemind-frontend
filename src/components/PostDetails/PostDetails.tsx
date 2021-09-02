import React, { useEffect, useState } from 'react';
import { GET_POST_DETAILS } from '../../index';
import { useQuery } from '@apollo/client';
import { Details } from '../../utils/types';
import { PostedBy } from '../PostedBy/PostedBy';
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
    <main>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading post...</p>}
      {details && !loading && !error && (
        <>
          <h2>Title: {details.title}</h2>
          <PostedBy post={details} />
          <img
            src={details.image}
            alt={`User upload to go with post titled: ${details.title}`}
          />
          <h2>Description</h2>
          <p>{details.description}</p>
          <h2>Comments:</h2>
          {!details.comments.length && <p>No comments yet...</p>}
          {!!details.comments.length && <p>{details.comments[0].content}</p>}
        </>
      )}
    </main>
  );
};
