import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { Modal } from '../Modal/Modal';
import { PostDetails } from '../PostDetails/PostDetails';
import { UserType } from '../../utils/types';
import { GET_USER } from '../../index';
import { useQuery } from '@apollo/client';
import './App.css';

export const App: React.FC = () => {
  const [modal, toggleModal] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const { loading, data, error } = useQuery(GET_USER);

  useEffect(() => {
    if (!loading && data) {
      setUser(data.user);
    }
  }, [data, loading]);

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
    <main className='app'>
      <Header user={user} />

      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <button
                className='add-post-button'
                onClick={() => toggleModal(!modal)}
              >
                Add a post!
              </button>
              <Cards />
              {modal && user && <Modal closeModal={closeModal} user={user} />}
            </>
          )}
        />

        <Route
          path='/posts/:id'
          render={({ match }) => {
            const { id } = match.params;
            return <PostDetails id={id} />;
          }}
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
