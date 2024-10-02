import { useQuery } from "@tanstack/react-query";
import { searchRoute } from "~/api/job";

export const JobHook = (search?: string, endpoint?: string) => {
  const jobQuery = useQuery({
    queryKey: ["jobs", search, endpoint],
    queryFn: () => searchRoute(search, endpoint),
    enabled: !!search,
  });

  return { jobQuery };
};
