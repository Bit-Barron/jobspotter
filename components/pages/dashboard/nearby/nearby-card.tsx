import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { useRouter } from "expo-router";

interface NearbyJobCardProps {
  item: any;
}

export const NearbyJobCard = ({ item }: NearbyJobCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="mb-4"
      onPress={() => router.push(`/details/${item.job_id}`)}
    >
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
