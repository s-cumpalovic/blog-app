import { axiosObj } from "./AxiosService";

class PostsService {
  async getAll() {
    const response = await axiosObj.get("/posts");
    return response;
  }

  async get(id) {
    const response = await axiosObj.get(
      `/posts/${id}?filter={"include":["comments"]}`
    );
    return response;
  }

  async post(obj) {
    const response = await axiosObj.post("/posts", obj);
    return response;
  }

  async edit(id, obj) {
    const response = await axiosObj.put(`/posts/${id}`, obj);
    return response;
  }

  async delete(id) {
    const response = await axiosObj.delete(`/posts/${id}`);
    return response;
  }

  async addComment(comment, postId) {
    const response = await axiosObj.post(`/posts/${postId}/comments`, comment);
    return response;
  }

  async getCommentCount(postId) {
    const response = await axiosObj.get(`/posts/${postId}/comments/count`);
    return response;
  }
}

export default new PostsService();
