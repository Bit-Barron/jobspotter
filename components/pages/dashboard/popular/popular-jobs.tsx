import React from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import PopularJobCard from "./popular-card";
import { SearchStore } from "~/store/dashboard/SearchStore";

export const PopularJobs = () => {
  const { search } = SearchStore();
  const { jobQuery } = JobHook(search);

  return (
    <View>
      {jobQuery.isLoading ? (
        <ActivityIndicator size="large" />
      ) : jobQuery.isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {jobQuery.data?.data.map((item: any) => (
            <PopularJobCard
              key={item?.job_id || Math.random().toString()}
              item={item}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
