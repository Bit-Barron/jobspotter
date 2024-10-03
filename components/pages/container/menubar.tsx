import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Briefcase, Home, Settings, HeartIcon } from "lucide-react-native";
import { useRouter } from "expo-router";

interface MenubarProps {}

const Menubar: React.FC<MenubarProps> = () => {
  const router = useRouter();
  return (
    <View className="flex-row justify-around items-center bg-white py-2 border-t border-gray-200">
      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/(main)/")}
      >
        <Home size={24} color="#000" />
        <Text className="text-xs mt-1">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/(main)/jobs")}
      >
        <Briefcase size={24} color="#000" />
        <Text className="text-xs mt-1">Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/(main)/settings")}
      >
        <Settings size={24} color="#000" />
        <Text className="text-xs mt-1">Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menubar;
