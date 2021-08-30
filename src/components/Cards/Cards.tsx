import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../../utils/apiCalls';
import { Post } from '../App/App';
import { Card } from '../Card/Card';
import './Cards.css';
import mockData from '../../mockdata/mockPosts.json';

interface CardsProps {}

export const Cards: React.FC<CardsProps> = () => {
  const [posts, setPosts] = useState<any>([]);
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  // useEffect(() => {
  //   if (!loading && data) {
  //     setPosts(data.posts);
  //   }
  // }, [data, loading]);

  useEffect(() => {
    setPosts(mockData.posts);
  }, []);

  const makeCards = (posts: Post[]) => {
    return posts.map((post: Post) => {
      return <Card key={post.id} post={post} />;
    });
  };

  return (
    <section className='cards-container'>
      {loading && <p>Loading...</p>}
      {error && <p>Error:</p>}
      {!!posts.length && makeCards(posts)}
      {!loading && !posts.length && <p>No posts yet...</p>}
    </section>
  );
};
