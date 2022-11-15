import React from "react";
import { useFormattedDate } from "../../hooks/useFormattedDate";

export default function SinglePostComponent(post) {
  const formattedDate = useFormattedDate(post.createdAt, "dd-MMMM-yyyy hh:mm"); // Example of format: /15. November 2022 - 11:05
  return (
    <>
      <p>{post.text}</p>
      <p>Created at: {formattedDate}</p>
      {post.comments &&
        post.comments.map((comment) => (
          <ul key={comment.id}>
            <li>{comment.text}</li>
          </ul>
        ))}
    </>
  );
}
