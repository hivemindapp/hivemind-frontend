export interface Post {
  __typename: string;
  createdAt: string;
  id: string;
  title: string;
  description: string;
  imageUrls?: string[];
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
  comments: CommentType[];
  description: string;
  downvotes?: number;
  upvotes?: number;
  createdAt: string;
  id: string;
  imageUrls?: string[];
  title: string;
  user: User;
  __typename: string;
}

export interface CommentType {
  __typename: string;
  id: string;
  content: string;
  createdAt: string;
  downvotes?: number;
  upvotes?: number;
  user: User;
}
