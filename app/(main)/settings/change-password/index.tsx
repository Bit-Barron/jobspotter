import React, { useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Text } from "~/components/ui/text";
import { Alert } from "react-native";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert("Error", "New passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const token = await getToken();
      const response = await fetch(
        "https://api.clerk.dev/v1/users/me/update_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            current_password: currentPassword,
            new_password: newPassword,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        Alert.alert("Error", result.errors[0].message);
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while changing the password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-6">Change Password</Text>

      <Input
        placeholder="Current Password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
        className="mb-4"
      />

      <Input
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        className="mb-4"
      />

      <Input
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        secureTextEntry
        className="mb-6"
      />

      <Button onPress={handleChangePassword} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-center font-semibold">
            Change Password
          </Text>
        )}
      </Button>
    </ScrollView>
  );
}
