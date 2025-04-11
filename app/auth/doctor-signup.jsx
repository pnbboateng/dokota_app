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

const DoctorSignup = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const [email, setEmail] = useState("");
  const [role, setRole] = useState(null);
  const router = useRouter();

  const handleSignup = () => {
    if (role === "doctor") {
      router.replace("/consultation");
    } else if (role === "patient") {
      router.replace("/(tabs)");
    } else {
      Alert.alert("Please select a role");
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
            borderColor: theme.text,
            marginVertical: 10,
            padding: 10,
            color: theme.text,
          }}
        />
        <Text>Select Role:</Text>
        <Button title="Doctor" onPress={() => setRole("doctor")} />
        <Button title="Patient" onPress={() => setRole("patient")} />
        <Button title="Signup" onPress={handleSignup} />
        <Button
          title="Go to Login"
          onPress={() => router.push("/auth/login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default DoctorSignup;
