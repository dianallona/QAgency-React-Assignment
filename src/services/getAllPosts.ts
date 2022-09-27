import { api } from "../utils/api";
import { TApiResponsePosts } from "./types";

const getAllPosts = () => {
  return api<TApiResponsePosts[]>({
    method: "GET",
    url: "/posts",
  });
};

export default getAllPosts;
