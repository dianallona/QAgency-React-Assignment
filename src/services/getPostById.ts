import { api } from "../utils/api";
import { TApiResponsePosts } from "./types";

const getPostById = (id: number) => {
  return api<TApiResponsePosts>({
    method: "GET",
    url: `/posts/${id}`,
  });
};

export default getPostById;
