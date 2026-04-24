import { useInfiniteQuery } from "@tanstack/react-query";
import { apiUserInventoryFetcher, apiUserInventoryURL, type UserInventoryParams } from "./fetch";

const PAGE_SIZE = 100;

export function useApiUserInventory(
  enabled: boolean,
  params?: Omit<UserInventoryParams, "offset" | "limit">,
) {
  return useInfiniteQuery({
    queryKey: [apiUserInventoryURL, params],
    queryFn: ({ pageParam = 0 }) => {
      const queryParams: UserInventoryParams = {
        ...params,
        limit: PAGE_SIZE,
        offset: pageParam,
      };
      return apiUserInventoryFetcher(queryParams);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const links = lastPage._metadata.links;
      if (!links?.next) return undefined;
      const url = new URL(links.next);
      return parseInt(url.searchParams.get("offset") ?? "0", 10);
    },
    enabled,
  });
}

export type { UserInventoryItem, UserInventoryResponse } from "./types";
export type { UserInventoryParams } from "./fetch";