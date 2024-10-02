import React from "react";
import { ActivityIndicator, View, FlatList } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import { NearbyJobCard } from "./nearby-card";

interface NearbyJobsProps {}

export const NearbyJobs: React.FC<NearbyJobsProps> = () => {
  const { jobQuery } = JobHook("estimated-salary");

  const renderItem = ({ item }: { item: any }) => <NearbyJobCard item={item} />;

  return (
    <FlatList
      data={jobQuery.data?.data || []}
      renderItem={renderItem}
      keyExtractor={(item) => item?.job_id || Math.random().toString()}
      ListEmptyComponent={
        jobQuery.isLoading ? (
          <ActivityIndicator size="large" />
        ) : jobQuery.isError ? (
          <Text>Something went wrong</Text>
        ) : null
      }
      contentContainerStyle={{ flexGrow: 1, padding: 16 }}
      showsVerticalScrollIndicator={false}
    />
  );
};
