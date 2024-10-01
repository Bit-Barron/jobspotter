import { useRouter } from "expo-router";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { useAuthActions } from "~/store/auth/SignUpStore";

export default function Screen() {
  const router = useRouter();
  const { onLogout } = useAuthActions();

  const handleLogout = async () => {
    const success = await onLogout();
    if (success) {
      router.replace("/login");
    }
  };

  return (
    <View className="flex justify-center items-center h-screen">
      <TouchableOpacity onPress={() => router.push("/(main)")}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
