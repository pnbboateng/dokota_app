import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";

const ProfileLayout = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Profile", // This keeps the correct title in the tab bar
          headerShown: true, // Show the Profile header
          headerStyle: {
            backgroundColor: "#4c0519",
          },
          headerTintColor: theme.supportingText,
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Poppins-Bold", // Use the custom font family
            fontSize: 20, // Adjust font size if needed
          },
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          title: "Edit Profile",
          headerShown: true,
          headerStyle: { backgroundColor: "#4c0519" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="password"
        options={{
          title: "Change Password",
          headerShown: true,
          headerStyle: { backgroundColor: "#4c0519" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="notificationsettings"
        options={{
          title: "Notification Settings",
          headerShown: true,
          headerStyle: { backgroundColor: "#4c0519" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
