import { useQuery } from "@tanstack/react-query";
import { searchRoute } from "~/api/job";

export const JobHook = (endpoint: string) => {
  const jobQuery = useQuery({
    queryKey: ["jobs", endpoint],
    queryFn: async () => searchRoute(endpoint),
  });

  return {
    jobQuery,
  };
};
