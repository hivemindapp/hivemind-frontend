import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Header } from '../Header/Header';
import mockPosts from '../../mockdata/mockPosts.json';
import { Cards } from '../Cards/Cards';

export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  user: User;
  upvotes: number;
  downvotes: number;
  created_at: string;
}

export interface User {
  id: number;
  username: string;
}
export interface Posts {
  posts: Post[];
}

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Posts | {}>({});

  useEffect(() => {
    console.log('mock', mockPosts.data);
    setPosts(mockPosts.data);
  }, []);

  return (
    <main>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <button>Add a post...</button>
              <Cards posts={posts} />
            </>
          )}
        />
        <Route
          render={() => (
            <>
              <h2>
                Sorry, that page doesn't exist, would you like to go home?
              </h2>
              <NavLink to='/'>Home</NavLink>
            </>
          )}
        />
      </Switch>
    </main>
  );
};
