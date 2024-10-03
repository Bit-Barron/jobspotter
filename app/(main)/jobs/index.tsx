import React from "react";
import { FlatList, View, Image, TouchableOpacity, Linking } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ScrollView } from "react-native";

export default function Jobs() {
  const { jobQuery } = JobHook();

  if (jobQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading jobs...</Text>
      </View>
    );
  }

  if (jobQuery.isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error loading jobs</Text>
      </View>
    );
  }

  const jobs = jobQuery.data?.data || [];

  const renderJobItem = ({ item }: any) => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{item.job_title}</CardTitle>
        <Text className="text-sm text-gray-500">{item.employer_name}</Text>
      </CardHeader>
      <CardContent>
        <View className="flex-row items-center mb-2">
          {item.employer_logo && (
            <Image
              source={{ uri: item.employer_logo }}
              style={{ width: 50, height: 50, marginRight: 10 }}
              resizeMode="contain"
            />
          )}
          <View>
            <Text className="font-bold">{item.job_employment_type}</Text>
            <Text>{`${item.job_city}, ${item.job_state}, ${item.job_country}`}</Text>
          </View>
        </View>
        <Text numberOfLines={3} className="text-sm">
          {item.job_description}
        </Text>
      </CardContent>
      <CardFooter>
        <Button onPress={() => Linking.openURL(item.job_apply_link)}>
          <Text>Apply Now</Text>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Available Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.job_id}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}
