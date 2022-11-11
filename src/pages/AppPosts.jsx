import React, { useState, useEffect } from "react";
import PostComponent from "../components/PostsComponents/PostComponent";
import PostsService from "../services/PostsService";

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

  return (
    <div className="posts-container">
      <h1>Blog posts:</h1>
      {posts && posts.map((post) => <PostComponent key={post.id} {...post} />)}
    </div>
  );
}
