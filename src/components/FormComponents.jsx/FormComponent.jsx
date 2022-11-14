import React from "react";

export default function FormComponent({
  id,
  handleSubmit,
  onSubmit,
  register,
  reset,
}) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
        <input
          type="text"
          {...register("title", { required: true, minLength: 2 })}
        />
        <input
          type="text"
          {...register("text", { required: true, maxLength: 300 })}
        />
        <button type="submit">{id ? "Edit post" : "Add post"}</button>
      </form>
      <button onClick={() => reset()}>Reset form</button>
    </div>
  );
}
