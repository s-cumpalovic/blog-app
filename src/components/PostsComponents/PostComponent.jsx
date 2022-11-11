import React from "react";

export default function PostComponent(post) {
  return (
    <div className="single-post-container" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </div>
  );
}
