export interface Post {
  __typename: string;
  createdAt: string;
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  user: UserType;
  upvotes?: number;
  downvotes?: number;
}

export interface UserType {
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
  user: UserType;
  __typename: string;
}

export interface CommentType {
  __typename: string;
  id: string;
  content: string;
  createdAt: string;
  downvotes?: number;
  upvotes?: number;
  user: UserType;
}

export interface BlobType {
  data_url: string;
  file: {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  };
}
