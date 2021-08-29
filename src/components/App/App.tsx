import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { Header } from "../Header/Header";
import mockPosts from "../../mockdata/mockPosts.json";
import { Cards } from "../Cards/Cards";
import { Modal } from "../Modal/Modal";

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

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [modal, toggleModal] = useState<boolean>(false);

  useEffect(() => {
    setPosts(mockPosts.data);
  }, []);

  const submitPost = (newPost: object) => {
    // setPosts(...posts, newPost);
    console.log("add button working");
  };

  return (
    <main>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <button onClick={() => toggleModal(!modal)}>Add a post!</button>
              <Cards posts={posts} />
              {modal && <Modal submitPost={submitPost} />}
            </>
          )}
        />
        <Route
          render={() => (
            <>
              <h2>
                Sorry, that page doesn't exist, would you like to go home?
              </h2>
              <NavLink to="/">Home</NavLink>
            </>
          )}
        />
      </Switch>
    </main>
  );
};
