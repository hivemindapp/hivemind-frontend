import React from "react";
import "./Cards.css";

interface CardsProps {
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

export const Cards: React.FC<CardsProps> = ({ posts }) => {
  return <div></div>;
};
