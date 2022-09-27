import { AxiosResponse } from "axios";
import { testPostsData } from "../../testData";
import { TApiResponsePosts } from "../types";

const getPostById = () =>
  Promise.resolve<AxiosResponse<TApiResponsePosts>>({
    data: testPostsData[0],
    config: {},
    headers: {},
    status: 200,
    statusText: "OK",
  });

export default getPostById;
