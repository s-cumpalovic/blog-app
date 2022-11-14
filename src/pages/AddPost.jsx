import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormComponent from "../components/FormComponents.jsx/FormComponent";
import PostsService from "../services/PostsService";
import { useHistory, useParams } from "react-router-dom";

export default function AddPost() {
  const [singlePost, setSinglePost] = useState();
  const { handleSubmit, register, reset, setValue } = useForm();
  const history = useHistory();
  const { id } = useParams();

  console.log(handleSubmit);
  useEffect(() => {
    handleSinglePost();
  }, []);

  const handleSubmitForm = async (formValues) => {
    let response = {};
    if (!id) {
      response = await PostsService.post(formValues);
    } else {
      response = await PostsService.edit(id, formValues);
    }

    if (response.status === 200) {
      alert("Post added successfully!");
      history.push("/posts");
    }
  };

  const handleSinglePost = async () => {
    console.log(id);
    if (id) {
      const response = await PostsService.get(id);
      console.log(response.data);
      if (response.status === 200) {
        reset({ ...response.data });
      }
    }
  };

  return (
    <FormComponent
      id={id}
      handleSubmit={handleSubmit}
      onSubmit={handleSubmitForm}
      register={register}
      reset={reset}
      setValues={setValue}
    />
  );
}
