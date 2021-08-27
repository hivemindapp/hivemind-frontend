import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import mockPosts from "../../mockdata/mockPosts.json";
import { Cards } from "../Cards/Cards";

interface AppProps {
  posts: {
    id: number;
    attributes: {
      user_id: number;
      username: string;
      title: string;
      description: string;
      photo: string;
      created_at: string;
      upvotes: number;
      downvotes: number;
    };
  }[];
}

export const App: React.FC<AppProps> = () => {
  const [posts, setPosts] = useState<AppProps["posts"]>({});

  useEffect(() => {
    setPosts(mockPosts.data);
  }, []);

  return (
    <main>
      <Header />
      <Cards posts={posts} />
    </main>
  );
};
