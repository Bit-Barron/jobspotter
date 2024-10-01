import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { authRoute } from "~/api/auth";

export default function LoginPage() {
  const query = useQuery({
    queryKey: ["auth"],
    queryFn: () => authRoute(),
  });

  console.log(query.data);

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
