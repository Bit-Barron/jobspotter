import { useQuery, QueryKey } from "@tanstack/react-query";
import { searchRoute } from "~/api/job";

export const JobHook = (search?: string, endpoint: string = "search") => {
  const queryKey: QueryKey = ["jobs", endpoint, search];

  const jobQuery = useQuery({
    queryKey,
    queryFn: () => searchRoute(search, endpoint),
    enabled: endpoint === "job-details" ? !!search : true,
    staleTime: endpoint === "job-details" ? Infinity : 5 * 60 * 1000, // 5 minutes for search, infinite for job details
  });

  return { jobQuery };
};
