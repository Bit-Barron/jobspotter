import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useColorScheme } from "nativewind";

interface SidebarProps {
  navigation: {
    navigate: (route: any) => any;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const menuItems = [
    { name: "Home", route: "Home" },
    { name: "Profile", route: "Profile" },
    { name: "Settings", route: "Settings" },
    { name: "Help", route: "Help" },
  ];

  return (
    <View className={`w-64 h-full ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
      <View
        className={`p-4 border-b ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <Text
          className={`text-xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Menu
        </Text>
      </View>
      <ScrollView className="flex-1">
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`p-4 border-b ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
            onPress={() => navigation.navigate(item.route)}
          >
            <Text className={isDark ? "text-gray-200" : "text-gray-700"}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Sidebar;
