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
import { Href, useRouter } from "expo-router";

interface PopularJobCardProps {
  item: any;
}

const PopularJobCard = ({ item }: PopularJobCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="mr-4 w-96 h-60"
      onPress={() => router.push(`/details/${item.job_id}`)}
    >
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
          <Text className="text-lg font-semibold mb-1 truncate">
            {item.job_title || "Untitled Position"}
          </Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-sm text-gray-600">
              {item.employer_name || "Unknown Company"}
            </Text>
          </View>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
// azerabdu5@gmail.com
