import { useQuery } from "@tanstack/react-query";
import { apiUserBasicFetcher, apiUserBasicURL } from "./fetch";

export function useApiUserBasic(enabled: boolean) {
  return useQuery({
    queryKey: [apiUserBasicURL],
    queryFn: apiUserBasicFetcher,
    enabled,
  });
}
