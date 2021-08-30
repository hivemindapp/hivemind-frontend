import React from 'react';
import { Post } from '../App/App';
import { Card } from '../Card/Card';
import './Cards.css';

interface CardsProps {
  posts: Post[];
}

export const Cards: React.FC<CardsProps> = ({ posts }) => {
  const makeCards = (posts: Post[]) => {
    return posts.map((post: Post) => {
      return <Card key={post.id} post={post} />;
    });
  };

  return (
    <section className='cards-container'>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error:</p>} */}
      {!!posts.length && makeCards(posts)}
      {/* {!loading && !posts.length && <p>No posts yet...</p>} */}
    </section>
  );
};
