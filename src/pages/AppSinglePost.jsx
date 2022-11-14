import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../components/PostsComponents/PostComponent";
import PostsService from "../services/PostsService";

export default function AppSinglePost() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState();

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

  if (singlePost) {
    return (
      <div key={singlePost.id}>
        <PostComponent {...singlePost} />
      </div>
    );
  }
}
