import { useQuery } from "@tanstack/react-query";
import { searchRoute } from "~/api/job";

export const JobHook = (query: string) => {
  const jobQuery = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => searchRoute(query || "developer", "search"),
  });

  return {
    jobQuery,
  };
};
