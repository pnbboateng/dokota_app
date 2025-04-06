import React from "react";
import {
  SafeAreaView,
  Appearance,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const Login = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "nanaboatengphilip@gmail.com") {
      router.replace("/(doctors_tabs)"); // doctor view
    } else if (email === "nanabeeeofficial@gmail.com") {
      router.replace("/(patients_tabs)"); // patient view
    } else {
      Alert.alert("Invalid email");
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,

        // paddingBottom: Platform.OS === "android" ? 25 : 0, // Adjust manually if needed // Fix for TypeScript
      }}
      className="h-screen "
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View style={{ padding: 20 }}>
        <Text style={{ color: theme.text }}>Email</Text>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: theme.text,
            marginVertical: 10,
            padding: 10,
          }}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="Go to Signup"
          onPress={() => router.push("/auth/signup")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
