import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div className="loader"></div>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {items.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
