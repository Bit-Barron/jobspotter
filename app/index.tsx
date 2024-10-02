import { useRouter } from "expo-router";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

export default function Screen() {
  const router = useRouter();

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
    </View>
  );
}
