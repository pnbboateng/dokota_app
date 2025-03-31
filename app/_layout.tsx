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
          headerShown: false,
          headerStyle: { backgroundColor: theme.headerBackground },
          headerTintColor: theme.text,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
