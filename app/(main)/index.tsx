import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { PopularJobs } from "~/components/pages/dashboard/popular/popular-jobs";
import { NearbyJobs } from "~/components/pages/dashboard/nearby/nearby-jobs";
import { SearchStore } from "~/store/dashboard/SearchStore";

export default function Main() {
  const { user } = useUser();
  const { search, setSearch } = SearchStore();

  return (
    <View className="p-2 flex-1">
      <Text className="text-lg font-light">Hello, {user?.username}</Text>
      <Text className="text-3xl font-semibold mt-1">Find your perfect job</Text>
      <View className="flex-row mt-5 items-center">
        <View className="flex-1 mr-2">
          <Input
            value={search}
            onChange={(e) => setSearch(e.nativeEvent.text)}
            placeholder="What are you looking for?"
          />
        </View>
        <Button onPress={() => setSearch(search)}>
          <Text>Search</Text>
        </Button>
      </View>
      <View className="flex-row mt-4 mb-4">
        <TouchableOpacity className="px-4 border py-2 rounded-full mr-2">
          <Text>Full-time</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border px-4 py-2 rounded-full mr-2">
          <Text>Part-time</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border px-4 py-2 rounded-full">
          <Text>Remote</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-5 flex-row justify-between items-center p-3">
        <Text className="text-2xl">Popular Jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-600">Show all</Text>
        </TouchableOpacity>
      </View>
      <PopularJobs />
      <View className="mt-5 flex-row justify-between items-center p-3">
        <Text className="text-2xl">Nearby jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-600">Show all</Text>
        </TouchableOpacity>
      </View>
      <NearbyJobs />
    </View>
  );
}
