import React from "react";
import { ActivityIndicator, View, ScrollView } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import { NearbyJobCard } from "./nearby-card";

interface NearbyJobsProps {}

export const NearbyJobs: React.FC<NearbyJobsProps> = () => {
  const { jobQuery } = JobHook("estimated-salary");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, padding: 16 }}
      showsVerticalScrollIndicator={false}
    >
      {jobQuery.isLoading ? (
        <ActivityIndicator size="large" />
      ) : jobQuery.isError ? (
        <Text>Something went wrong</Text>
      ) : jobQuery.data?.data && jobQuery.data.data.length > 0 ? (
        jobQuery.data.data.map((item: any) => (
          <NearbyJobCard
            key={item?.job_id || Math.random().toString()}
            item={item}
          />
        ))
      ) : (
        <Text>No nearby jobs found</Text>
      )}
    </ScrollView>
  );
};
