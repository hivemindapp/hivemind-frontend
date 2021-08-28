import React from 'react';
import { Post } from '../App/App';
import { Card } from '../Card/Card';
import './Cards.css';

interface CardsProps {
  posts: Post[] | [];
}

export const Cards: React.FC<CardsProps> = ({ posts }) => {
  const makeCards = (posts: Post[]) => {
    return posts.map((post: Post) => {
      return <Card key={post.id} post={post} />;
    });
  };

  return (
    <section className='cards-container'>
      {!!posts.length && makeCards(posts)}
      {!posts.length && <h2>No posts yet...</h2>}
    </section>
  );
};
