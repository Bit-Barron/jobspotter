import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";

import { Text } from "~/components/ui/text";
import { PopularJobs } from "~/components/pages/dashboard/popular/popular-jobs";
import { NearbyJobs } from "~/components/pages/dashboard/nearby/nearby-jobs";
import { useRouter } from "expo-router";

export default function Main() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <View className="p-2 flex-1">
      <Text className="text-lg font-light p-2">Hello, {user?.username}</Text>

      <View className="mt-5 flex-row justify-between items-center p-3">
        <Text className="text-2xl">Popular Jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-600"></Text>
        </TouchableOpacity>
      </View>
      <PopularJobs />
      <View className="mt-5 flex-row justify-between items-center p-3">
        <TouchableOpacity>
          <Text className="text-2xl">Nearby jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/jobs/")}>
          <Text className="text-gray-600">Show all</Text>
        </TouchableOpacity>
      </View>
      <NearbyJobs />
    </View>
  );
}
