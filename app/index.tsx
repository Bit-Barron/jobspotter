import { useRouter } from "expo-router";
import * as React from "react";
import { ImageBackground, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function Screen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      }}
      className="flex-1 justify-end"
    >
      <View className="bg-black/50 p-6 pt-12">
        <Text className="text-4xl font-bold text-white mb-2">JobSpotter</Text>
        <Text className="text-xl text-gray-200 mb-8">
          Discover your next career opportunity
        </Text>
        <View className="space-y-4 mb-12">
          <Button onPress={() => router.push("/(main)")}>
            <Text>Browse Jobs</Text>
          </Button>
          <Button onPress={() => router.push("/(auth)/login")}>
            <Text>Login</Text>
          </Button>
          <Button onPress={() => router.push("/(auth)/register")}>
            <Text>Create Account</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}
