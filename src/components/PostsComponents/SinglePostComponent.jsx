import React from "react";
import { useFormattedDate } from "../../hooks/useFormattedDate";

export default function SinglePostComponent(post) {
  const formattedDate = useFormattedDate(post.createdAt, "dd-MMMM-yyyy hh:mm"); // Example of format: /15. November 2022 - 11:05
  return (
    <div key={post.id}>
      <p>{post.text}</p>
      <p>Created at: {formattedDate}</p>
      {post.comments &&
        post.comments.map((comment) => (
          <div key={comment.id}>
            <ul>
              <li key={comment.id}>{comment.text}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}
