import { api } from "../apiClient";
import type { UserBasic } from "./types";

export const apiUserBasicURL = "/user/basic";
export const apiUserBasicFetcher = () => {
  return api.get<UserBasic>(apiUserBasicURL);
};
