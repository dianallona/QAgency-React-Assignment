import { AxiosResponse } from "axios";
import { testUser } from "../../testData";
import { TApiResponseUsers } from "../types";

const getUserById = () =>
  Promise.resolve<AxiosResponse<TApiResponseUsers>>({
    data: testUser,
    config: {},
    headers: {},
    status: 200,
    statusText: "OK",
  });

export default getUserById;
