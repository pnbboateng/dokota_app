import { Stack } from "expo-router";
import "./global.css";
import { Appearance } from "react-native";

import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Home",
          headerShown: false,
          headerStyle: { backgroundColor: theme.headerBackground },
          headerTintColor: theme.text,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerBackTitle: "Back",

          headerShown: true,

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
    </Stack>
  );
}
