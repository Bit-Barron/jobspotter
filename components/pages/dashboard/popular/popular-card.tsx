import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface PopularJobCardProps {
  item: any;
}

const PopularJobCard = ({ item }: PopularJobCardProps) => {
  return (
    <TouchableOpacity className="mr-4">
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-2">
          <View className="flex-row items-center justify-between">
            <Image
              source={{
                uri: item.employer_logo || "https://via.placeholder.com/50",
              }}
              className="w-12 h-12 rounded"
            />
            <Badge
              variant={
                item.job_employment_type === "FULLTIME"
                  ? "default"
                  : "secondary"
              }
            >
              <Text>{item.job_employment_type || "N/A"}</Text>
            </Badge>
          </View>
        </CardHeader>
        <CardContent>
          <Text className="text-lg font-semibold mb-1 w-40 truncate">
            {item.job_title || "Untitled Position"}
          </Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-sm text-gray-600">
              {item.employer_name || "Unknown Company"}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-sm text-gray-600">
              {item.job_city || "Location not specified"},{" "}
              {item.job_country || ""}
            </Text>
          </View>
        </CardContent>
        <CardFooter>
          <View className="flex-row items-center">
            <Text className="text-xs text-gray-500">
              Posted{" "}
              {new Date(
                item.job_posted_at_timestamp * 1000
              ).toLocaleDateString()}
            </Text>
          </View>
        </CardFooter>
      </Card>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
// azerabdu5@gmail.com