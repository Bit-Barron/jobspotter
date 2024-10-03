import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Briefcase, Home, Settings, User } from "lucide-react-native";

interface MenubarProps {}

const Menubar: React.FC<MenubarProps> = () => {
  return (
    <View className="flex-row justify-around items-center bg-white py-2 border-t border-gray-200">
      <TouchableOpacity className="items-center">
        <Home size={24} color="#000" />
        <Text className="text-xs mt-1">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <Briefcase size={24} color="#000" />
        <Text className="text-xs mt-1">Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <User size={24} color="#000" />
        <Text className="text-xs mt-1">Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <Settings size={24} color="#000" />
        <Text className="text-xs mt-1">Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menubar;
