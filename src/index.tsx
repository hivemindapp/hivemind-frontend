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
  uri: 'https://hivemind-staging-branch.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

// image is going to be imageUrls after Molly's PR
export const GET_ALL_POSTS = gql`
  query {
    posts {
      id
      title
      image
      description
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

export const GET_POST_DETAILS = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      description
      image
      upvotes
      downvotes
      createdAt
      user {
        id
        username
        avatar
      }
      comments {
        id
        content
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

// this is the production uri, we need to change to staging:
// uri: 'https://hivemind-backend.herokuapp.com/graphql',
