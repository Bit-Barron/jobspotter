import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default Layout;
