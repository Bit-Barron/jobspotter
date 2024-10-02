import { useUser } from "@clerk/clerk-expo";
import { Stack, useRouter } from "expo-router";

const Layout = () => {
  const { user } = useUser();
  const router = useRouter();
  if (!user) {
    return router.push("/(auth)/login");
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;
