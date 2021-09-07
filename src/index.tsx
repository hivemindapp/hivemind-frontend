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

export const baseURL = 'https://hivemind-staging-branch.herokuapp.com';

const client = new ApolloClient({
  uri: `${baseURL}/graphql`,
  cache: new InMemoryCache()
});

export const GET_ALL_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      imageUrls
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

export const GET_USER = gql`
  query getUser {
    user(id: 23) {
      id
      username
      region
      biography
      avatar
    }
  }
`;

export const GET_POST_DETAILS = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      description
      imageUrls
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

export const ADD_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      description
      imageUrls
      upvotes
      downvotes
      createdAt
      updatedAt
      user {
        id
        username
        avatar
      }
    }
  }
`;

export const CREATE_DIRECT_UPLOAD = gql`
  mutation createDirectUpload($input: CreateDirectUploadInput!) {
    createDirectUpload(input: $input) {
      directUpload {
        signedBlobId
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
