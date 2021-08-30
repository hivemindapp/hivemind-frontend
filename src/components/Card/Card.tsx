import React from "react";
import { Post } from "../App/App";
import "./Card.css";

interface CardProps {
  post: Post;
}

export const Card: React.FC<CardProps> = ({ post }) => {
  return (
    <button className="card">
      {post.image && <img src={post.image[0]} alt={`${post.title}`} />}
      <h2>{post.title}</h2>
    </button>
  );
};
