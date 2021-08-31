import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { Modal } from '../Modal/Modal';

export interface Post {
  __typename: string;
  createdAt: string;
  id: string;
  title: string;
  description: string;
  image?: string;
  user: User;
  upvotes?: number;
  downvotes?: number;
}

export interface User {
  __typename: string;
  id: number;
  username: string;
  avatar: string;
}

export const App: React.FC = () => {
  const [modal, toggleModal] = useState<boolean>(false);

  const closeModal = (event: any) => {
    if (event.target.id === 'x') {
      toggleModal(false);
    } else if (event.target.id === 'submitButton') {
      toggleModal(false);
    } else if (event.target.closest('section').id === 'modalContent') {
      return;
    }
    toggleModal(false);
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
              <button
                className="add-post-btn"
                onClick={() => toggleModal(!modal)}
              >
                Add a post!
              </button>
              <Cards />
              {modal && <Modal closeModal={closeModal} />}
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
