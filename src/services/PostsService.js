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

  async post(obj) {
    const response = await axiosObj.post("/posts", obj);
    return response;
  }
}

export default new PostsService();
