import { AxiosResponse } from "axios";
import { testCommentsByPostData } from "../../testData";
import { TApiResponseComments } from "../types";

const getCommentsByPost = () =>
  Promise.resolve<AxiosResponse<TApiResponseComments[]>>({
    data: testCommentsByPostData,
    config: {},
    headers: {},
    status: 200,
    statusText: "OK",
  });

export default getCommentsByPost;
