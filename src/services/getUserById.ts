import { api } from "../utils/api";
import { TApiResponseUsers } from "./types";

const getUserById = (id: number) => {
  return api<TApiResponseUsers>({
    method: "GET",
    url: `/users/${id}`,
  });
};

export default getUserById;
