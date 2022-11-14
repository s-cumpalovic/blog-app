import { axiosObj } from "./AxiosService";

class PostsService {
  async getAll() {
    const response = await axiosObj.get("/posts");
    return response;
  }

  async get(id) {
    const response = await axiosObj.get(`/posts/${id}`);
    return response;
  }
}

export default new PostsService();
