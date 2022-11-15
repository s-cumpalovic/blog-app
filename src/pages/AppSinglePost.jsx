import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CommentFormComponent from "../components/FormComponents.jsx/CommentFormComponent";
import SinglePostComponent from "../components/PostsComponents/SinglePostComponent";
import PostsService from "../services/PostsService";
import { Link } from "react-router-dom";

export default function AppSinglePost() {
  const { id, commentId } = useParams();
  const [singlePost, setSinglePost] = useState();
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    handleGetSinglePost();
    handleGetComment();
  }, []);

  const handleGetSinglePost = async () => {
    if (id) {
      const response = await PostsService.get(id);
      if (response.status === 200) {
        setSinglePost(response.data);
      }
    }
  };

  const handleSubmitComment = async (formValues) => {
    let response = {};

    if (commentId) {
      response = await PostsService.editComment(commentId, formValues);
      if (response.status === 200) {
        setSinglePost({
          ...singlePost,
          comments: [...singlePost.comments, formValues],
        });
      }
    } else {
      response = await PostsService.addComment(formValues, singlePost.id);
      if (response.status === 200) {
        setSinglePost({
          ...singlePost,
          comments: [...singlePost.comments, formValues],
        });
        reset();
      }
    }
  };

  const handleDeleteComment = async (id) => {
    const response = await PostsService.deleteComment(id);
    if (response.status === 200) {
      setSinglePost({
        ...singlePost,
        comments: [
          ...singlePost.comments.filter((comment) => comment.id !== id),
        ],
      });
    }
  };

  const handleGetComment = async () => {
    if (commentId) {
      const response = await PostsService.getComment(commentId);
      if (response.status === 200) {
        reset({ ...response.data });
      }
    }
  };

  if (singlePost) {
    return (
      <>
        <div key={singlePost.id}>
          <SinglePostComponent {...singlePost} />
          {singlePost.comments &&
            singlePost.comments.map((comment) => (
              <div key={comment.id}>
                <button onClick={() => handleDeleteComment(comment.id)}>
                  Delete comment
                </button>
                <Link to={`/posts/${singlePost.id}/edit/${comment.id}`}>
                  Edit comment
                </Link>
              </div>
            ))}
        </div>
        <div>
          <CommentFormComponent
            commentId={commentId}
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
