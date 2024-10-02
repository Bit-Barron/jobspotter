import * as React from "react";
import { useRouter } from "expo-router";
import { useAuthActions, useAuthStore } from "~/store/auth/SignUpStore";
import { Input } from "~/components/ui/input";
import { Card } from "~/components/ui/card";
import { TouchableOpacity, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function SignUpScreen() {
  const router = useRouter();
  const {
    emailAddress,
    password,
    username,
    code,
    error,
    pendingVerification,
    setEmailAddress,
    setPassword,
    setUsername,
    setCode,
  } = useAuthStore();
  const { onSignUpPress, onPressVerify } = useAuthActions();

  const handleSignUp = () => {
    onSignUpPress(emailAddress, username, password);
  };

  const handleVerify = async () => {
    const success = await onPressVerify(code);
    if (success) {
      router.replace("/");
    }
  };

  return (
    <View className="flex justify-center h-screen p-1">
      {error ? <Text>{error}</Text> : null}
      {!pendingVerification && (
        <Card>
          <Input
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email..."
            onChangeText={setEmailAddress}
          />
          <Input
            className="mt-2"
            autoCapitalize="none"
            value={username}
            placeholder="Username..."
            onChangeText={setUsername}
          />
          <Input
            className="mt-2"
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <Button className="mt-5" onPress={handleSignUp}>
            <Text>Sign Up</Text>
          </Button>

          <View className="items-center">
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text>Already have an account?</Text>
            </TouchableOpacity>
          </View>
        </Card>
      )}
      {pendingVerification && (
        <>
          <Input value={code} placeholder="Code..." onChangeText={setCode} />
          <Button onPress={handleVerify}>
            <Text>Verify Email</Text>
          </Button>
        </>
      )}
    </View>
  );
}
