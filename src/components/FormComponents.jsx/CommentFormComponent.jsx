import React from "react";

export default function CommentFormComponent({
  onSubmit,
  handleSubmit,
  register,
}) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
        <input type="text" {...register("text", { required: true })} />
      <button type="submit">Post comment</button>
      </form>
    </div>
  );
}
