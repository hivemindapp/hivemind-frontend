import React from 'react';
import './Cards.css';
import { Post, Posts } from '../App/App';
import { Card } from '../Card/Card';
interface CardsProps {
  posts: Posts | {};
}

export const Cards: React.FC<CardsProps> = ({ posts }) => {
  const makeCards = (posts: any) => {
    return posts.map((post: Post) => {
      console.log(post, 'jhi');
      return <Card key={post.id} post={post} />;
    });
  };

  return <article>{makeCards(posts)}</article>;
};
