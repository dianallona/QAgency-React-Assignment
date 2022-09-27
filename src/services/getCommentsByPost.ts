import { api } from "../utils/api";
import { TApiResponseComments } from "./types";

const getCommentsByPost = (id: number) => {
  return api<TApiResponseComments[]>({
    method: "GET",
    url: `/posts/${id}/comments`,
  });
};

export default getCommentsByPost;
