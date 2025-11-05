import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.items.find((p) => p.id === parseInt(id))
  );

  if (!post) {
    return <p style={{ color: "white" }}>Loading Post Details...</p>;
  }

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>Details Page for Post ID {id}</h2>
      <img
        src={`https://picsum.photos/300?random=${post.id}`}
        alt="Post Detail"
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>User ID: {post.userId}</p>
      <h3>Title: {post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Detail;
