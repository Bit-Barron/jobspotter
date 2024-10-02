import { useUser } from "@clerk/clerk-expo";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Stack, useRouter } from "expo-router";
import { searchRoute } from "~/api/job";
import { getQueryClient } from "~/lib/react-query";

const Layout = () => {
  const { user } = useUser();
  const router = useRouter();
  const queryClient = getQueryClient();
  const data = searchRoute();

  if (!user) {
    return router.push("/(auth)/login");
  }

  queryClient.setQueryData(["jobs"], data);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </HydrationBoundary>
  );
};

export default Layout;
