import React from 'react';
import { Post, Posts } from '../App/App';
import { Card } from '../Card/Card';
import './Cards.css';

interface CardsProps {
  posts: Posts | {};
}

export const Cards: React.FC<CardsProps> = ({ posts }) => {
  const makeCards = (posts: any) => {
    return posts.map((post: Post) => {
      return <Card key={post.id} post={post} />;
    });
  };

  return (
    <section className='cards-container'>
      {!!Object.keys(posts).length && makeCards(posts)}
      {!Object.keys(posts).length && <h2>No posts yet...</h2>}
    </section>
  );
};
