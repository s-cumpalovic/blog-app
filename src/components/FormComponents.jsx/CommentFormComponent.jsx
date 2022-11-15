import React from "react";

export default function CommentFormComponent({
  id,
  commentId,
  onSubmit,
  handleSubmit,
  register,
}) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
        <input type="text" {...register("text", { required: true })} />
        <button type="submit">
          {id && commentId ? "Save comment" : "Add comment"}
        </button>
      </form>
    </div>
  );
}
