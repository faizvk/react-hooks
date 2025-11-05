import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const shortTitle =
    post.title.length > 25 ? post.title.slice(0, 25) + "..." : post.title;
  const shortBody =
    post.body.length > 60 ? post.body.slice(0, 60) + "..." : post.body;

  return (
    <div className="card">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>User ID: {post.userId}</p>
      <p>Title: {shortTitle}</p>
      <p>
        Body: {shortBody}{" "}
        <Link to={`/item/${post.id}`} style={{ color: "skyblue" }}>
          Read More
        </Link>
      </p>
    </div>
  );
};

export default Card;
