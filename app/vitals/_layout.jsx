import { Stack } from "expo-router";
import { Appearance, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";

const _layout = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Vitals",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#4c0519",
          },

          headerTintColor: theme.supportingText,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="bp"
        options={{
          title: "Blood Pressure",
          headerBackTitle: "Back",
          headerShown: true,
          headerStyle: { backgroundColor: "#4c0519" },

          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="sugar"
        options={{
          title: "Blood Sugar Level",
          headerBackTitle: "Back",
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

export default _layout;
