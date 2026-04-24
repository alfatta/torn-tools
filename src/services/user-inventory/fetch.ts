import { api } from "../apiClient";
import type { UserInventoryResponse } from "./types";

export const apiUserInventoryURL = "/user/inventory";

export interface UserInventoryParams {
  cat?: string;
  offset?: number;
  limit?: number;
}

export const apiUserInventoryFetcher = (params?: UserInventoryParams) => {
  return api.get<UserInventoryResponse>(apiUserInventoryURL, { params: params as Record<string, string | number | boolean> });
};