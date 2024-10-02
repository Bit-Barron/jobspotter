import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { JobHook } from "~/components/hooks/job-hook";
import { PopularJobs } from "~/components/pages/home/popular/popular-jobs";

export default function Main() {
  const { user } = useUser();
  const { jobQuery } = JobHook();

  return (
    <View className="p-2 flex-1">
      <Text className="text-lg font-light">Hello, {user?.username}</Text>
      <Text className="text-3xl font-semibold mt-1">Find your perfect job</Text>
      <View className="flex-row mt-5 items-center">
        <View className="flex-1 mr-2">
          <Input placeholder="What are you looking for?" />
        </View>
        <Button>
          <Text>Search</Text>
        </Button>
      </View>
      <View className="flex-row mt-4 mb-4">
        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full mr-2">
          <Text>Full-time</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full mr-2">
          <Text>Part-time</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-full">
          <Text>Remote</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-5 flex-row justify-between items-center">
        <Text className="text-2xl">Popular Jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-600">Show all</Text>
        </TouchableOpacity>
      </View>
      <PopularJobs />
      <View className="mt-5 flex-row justify-between items-center">
        <Text className="text-2xl">Nearby jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-600">Show all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
