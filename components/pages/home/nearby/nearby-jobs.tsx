import { ActivityIndicator, FlatList, View } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import { NearbyJobCard } from "./nearby-card";

interface NearbyJobsProps {}

export const NearbyJobs: React.FC<NearbyJobsProps> = () => {
  const { jobQuery } = JobHook();

  return (
    <View>
      {jobQuery.isLoading ? (
        <ActivityIndicator size="large" />
      ) : jobQuery.isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={jobQuery.data?.data}
          renderItem={({ item }) => <NearbyJobCard item={item} />}
          keyExtractor={(item) => item?.job_id || Math.random().toString()}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};
