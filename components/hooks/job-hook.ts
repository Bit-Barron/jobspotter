import { useQuery } from "@tanstack/react-query";
import { searchRoute } from "~/api/job";

export const JobHook = () => {
  const jobQuery = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => searchRoute(),
  });

  return {
    jobQuery,
  };
};
