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

export interface Details {
  comments: Comment[];
  description: string;
  downvotes?: number;
  upvotes?: number;
  createdAt: string;
  id: string;
  image: string;
  title: string;
  user: User;
  __typename: string;
}

export interface Comment {
  __typename: string;
  id: string;
  content: string;
  createdAt: string;
  downvotes?: number;
  upvotes?: number;
  user: User;
}