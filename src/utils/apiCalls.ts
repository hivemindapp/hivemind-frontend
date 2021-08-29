import { gql } from '@apollo/client';

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
