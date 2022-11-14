import React from "react";
import { useForm } from "react-hook-form";
import FormComponent from "../components/FormComponents.jsx/FormComponent";
import PostsService from "../services/PostsService";
import { useHistory } from "react-router-dom";

export default function AddPost() {
  const { handleSubmit, register, reset } = useForm();
  const history = useHistory();

  const handleSubmitForm = async (formValues) => {
    const response = await PostsService.post(formValues);

    if (response.status === 200) {
      alert("Post added successfully!");
      history.push("/posts");
    }
  };

  return (
    <FormComponent
      handleSubmit={() => handleSubmit(handleSubmitForm)}
      register={register}
      reset={reset}
    />
  );
}
