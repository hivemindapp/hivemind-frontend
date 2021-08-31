import React, { useEffect, useState } from 'react';
import { Post } from '../App/App';
import { Card } from '../Card/Card';
import './Cards.css';
import { GET_ALL_POSTS } from '../../index';
import { useQuery } from '@apollo/client';

interface CardsProps {}

export const Cards: React.FC<CardsProps> = () => {
  const [posts, setPosts] = useState<Post[] | []>([]);
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  useEffect(() => {
    if (!loading && data) {
      setPosts(data.posts);
    }
  }, [data, loading]);

  const makeCards = (posts: Post[]) => {
    return posts.map((post: Post) => {
      return <Card key={post.id} post={post} />;
    });
  };

  return (
    <section className='cards-container'>
      {error && <p>Error: {error.message}</p>}
      {!error && loading && <p>Loading posts...</p>}
      {!error && !!posts.length && makeCards(posts)}
      {!error && !loading && !posts.length && <p>No posts yet...</p>}
    </section>
  );
};
