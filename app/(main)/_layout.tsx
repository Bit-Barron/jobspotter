import { useUser } from "@clerk/clerk-expo";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

const Layout = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/(auth)/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="jobs/index"
        options={{
          title: "Jobs",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: "Job Details",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
