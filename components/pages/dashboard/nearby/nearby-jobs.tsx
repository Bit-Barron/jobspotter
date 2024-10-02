import React from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import { NearbyJobCard } from "./nearby-card";

interface NearbyJobsProps {}

export const NearbyJobs: React.FC<NearbyJobsProps> = () => {
  const { jobQuery } = JobHook();

  return (
    <View className="px-4">
      {jobQuery.isLoading ? (
        <ActivityIndicator size="large" />
      ) : jobQuery.isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={jobQuery.data?.data}
          renderItem={({ item }) => <NearbyJobCard item={item} />}
          keyExtractor={(item) => item?.job_id || Math.random().toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
