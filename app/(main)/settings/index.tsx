import React from "react";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Text } from "~/components/ui/text";
import { ChevronRight, LogOut, Mail, Phone, User } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const { signOut } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const settingsOptions = [
    {
      icon: <Mail size={24} color="#4B5563" />,
      title: "Email",
      value: user?.primaryEmailAddress?.emailAddress,
    },
    {
      icon: <User size={24} color="#4B5563" />,
      title: "Username",
      value: user?.username,
    },
  ];

  const handleOptionPress = (href: string) => {
    router.push(href);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="items-center justify-center py-8 bg-white">
        <Image
          source={{ uri: user?.imageUrl }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="mt-4 text-xl font-semibold">{user?.fullName}</Text>
        <Text className="mt-2 text-gray-500">{user?.username}</Text>
      </View>

      <View className="mt-6 bg-white">
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center justify-between p-4 border-b border-gray-200"
          >
            <View className="flex-row items-center">
              {option.icon}
              <Text className="ml-3 text-gray-700">{option.title}</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="mr-2 text-gray-500">{option.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => signOut()}
        className="flex-row items-center justify-center mt-6 p-4 bg-white"
      >
        <LogOut size={24} color="#EF4444" />
        <Text className="ml-3 text-red-500 font-semibold">Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
