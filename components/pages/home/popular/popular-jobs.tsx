import React from "react";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, View } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import PopularJobCard from "./popular-jobs-card";

export const PopularJobs = () => {
  const router = useRouter();
  const { jobQuery } = JobHook();

  console.log("jobQuery status:", jobQuery.status);
  console.log("jobQuery data:", jobQuery.data);

  return (
    <View>
      {jobQuery.isLoading ? (
        <ActivityIndicator size="large" />
      ) : jobQuery.isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={jobQuery.data?.data}
          renderItem={({ item }) => <PopularJobCard item={item} />}
          keyExtractor={(item) => item?.job_id || Math.random().toString()}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};
