import React from "react";

export default function FormComponent({
  handleSubmit,
  onSubmit,
  register,
  reset,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} />
        <input type="text" {...register("text")} />
        <button type="submit">Add post</button>
      </form>
      <button onClick={() => reset()}>Reset form</button>
    </div>
  );
}
