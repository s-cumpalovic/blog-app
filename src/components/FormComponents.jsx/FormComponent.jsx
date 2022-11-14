import React from "react";

export default function FormComponent({ handleSubmit, onSubmit, register }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("title")} />
      <input type="text" {...register("text")} />
      <button type="submit">Add post</button>
    </form>
  );
}
