import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://hivemind-backend.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export const GET_ALL_POSTS = gql`
  query {
    posts {
      id
      title
      image
      upvotes
      downvotes
      createdAt
      user {
        id
        username
        avatar
      }
    }
  }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
