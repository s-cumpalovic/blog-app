import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CommentFormComponent from "../components/FormComponents.jsx/CommentFormComponent";
import PostComponent from "../components/PostsComponents/PostComponent";
import PostsService from "../services/PostsService";

export default function AppSinglePost() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState();
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    handleGetSinglePost();
  });

  const handleGetSinglePost = async () => {
    if (id) {
      const response = await PostsService.get(id);
      if (response.status === 200) {
        setSinglePost(response.data);
      }
    }
  };

  const handleSubmitComment = async (formValues) => {
    const response = await PostsService.addComment(formValues, singlePost.id);
    if (response.status === 200) {
      alert("Comment added!");
      reset();
    }
  };

  if (singlePost) {
    return (
      <>
        <div key={singlePost.id}>
          <PostComponent {...singlePost} />
          {singlePost.comments && (
            <p>Number of comments: {singlePost.comments.length}</p>
          )}
        </div>
        <div>
          <CommentFormComponent
            id={id}
            handleSubmit={handleSubmit}
            onSubmit={handleSubmitComment}
            register={register}
          />
        </div>
      </>
    );
  }
}
