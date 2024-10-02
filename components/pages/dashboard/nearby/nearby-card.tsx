import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardHeader } from "~/components/ui/card";

interface NearbyJobCardProps {
  item: any;
}

export const NearbyJobCard = ({ item }: NearbyJobCardProps) => {
  return (
    <TouchableOpacity className="mr-4 w-72">
      <Card>
        <CardHeader>
          <View className="flex-row items-center justify-between">
            <Image
              source={{
                uri: item.employer_logo || "https://via.placeholder.com/50",
              }}
              className="w-12 h-12 rounded"
            />
            <Text>{item.job_employment_type || "N/A"}</Text>
          </View>
        </CardHeader>
      </Card>
    </TouchableOpacity>
  );
};
