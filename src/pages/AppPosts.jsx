import React, { useState, useEffect } from "react";
import PostComponent from "../components/PostsComponents/PostComponent";
import PostsService from "../services/PostsService";
import { Link } from "react-router-dom";

export default function AppPosts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    const response = await PostsService.getAll();
    if (response.status === 200) {
      setPosts(response.data);
    }
  };

  const handleDeletePost = async (id) => {
    const response = await PostsService.delete(id);
    if (response.status === 200) {
      setPosts([...posts.filter((post) => post.id !== id)]);
    }
  };

  return (
    <div className="posts-container">
      <h1>Blog posts:</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <PostComponent title={post.title} />
            <Link to={`/posts/${post.id}`}>View post</Link>
            <Link to={`/edit/${post.id}`}>Edit post</Link>
            <button onClick={() => handleDeletePost(post.id)}>Delete post</button>
          </div>
        ))}
    </div>
  );
}
