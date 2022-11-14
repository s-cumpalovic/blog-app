import React from "react";

export default function PostComponent(post) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </>
  );
}
