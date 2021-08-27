import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import mockPosts from '../../mockdata/mockPosts.json';
import { Cards } from '../Cards/Cards';

export interface Post {
  type: string;
  id: number;
  attributes: {
    user_id: number;
    username: string;
    title: string;
    description: string;
    photo: string;
    created_at: string;
    upvotes: number;
    downvotes: number;
  };
}

export interface Posts {
  posts: Post[];
}

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Posts | {}>({});

  useEffect(() => {
    setPosts(mockPosts.data);
  }, []);

  return (
    <main>
      <Header />
      {Object.keys(posts).length && <Cards posts={posts} />}
    </main>
  );
};
