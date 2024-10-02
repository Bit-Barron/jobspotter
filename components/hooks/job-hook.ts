import { useQuery } from "@tanstack/react-query";
import { searchRoute } from "~/api/job";

export const JobHook = (endpoint?: string, query?: string) => {
  const jobQuery = useQuery({
    queryKey: ["jobs"],
    queryFn: async () =>
      searchRoute(query || "developer", endpoint || "search"),
  });

  return {
    jobQuery,
  };
};
