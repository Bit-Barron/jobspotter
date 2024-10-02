import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardHeader, CardContent } from "~/components/ui/card";

interface JobItem {
  id: string;
  employer_logo: string;
  job_title: string;
  employer_name: string;
  job_employment_type: string;
}

interface NearbyJobCardProps {
  item: JobItem;
}

export const NearbyJobCard = ({ item }: NearbyJobCardProps) => {
  return (
    <TouchableOpacity className="mb-4">
      <Card>
        <CardContent className="flex-row items-center p-4">
          <Image
            source={{
              uri: item.employer_logo || "https://via.placeholder.com/40",
            }}
            className="w-10 h-10 rounded mr-4"
          />
          <View className="flex-1">
            <Text className="font-semibold">{item.job_title}</Text>
            <Text className="text-sm text-gray-500">{item.employer_name}</Text>
            <Text className="text-sm mt-1">{item.job_employment_type}</Text>
          </View>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );
};
