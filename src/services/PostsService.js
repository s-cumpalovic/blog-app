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

  async edit(id, post) {
    const response = await axiosObj.put(`/posts/${id}`, post);
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

  async deleteComment(id) {
    const response = await axiosObj.delete(`/comments/${id}`);
    return response;
  }

  async getComment(id) {
    const response = await axiosObj.get(`/comments/${id}`);
    return response;
  }

  async editComment(id, comment) {
    const response = await axiosObj.put(`/comments/${id}`, comment);
    return response;
  }
}

export default new PostsService();
