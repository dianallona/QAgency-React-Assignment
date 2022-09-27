import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const defaultOptions: AxiosRequestConfig = {
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "applicatin/json" },
};

export const api = <T = any>(
  options: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const _options = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  return axios.request(_options);
};
