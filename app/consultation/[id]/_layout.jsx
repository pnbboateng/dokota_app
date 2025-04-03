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
          title: "Doctor",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#4c0519",
          },

          headerTintColor: theme.supportingText,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="reviews"
        options={{
          title: "Reviews",
          headerBackTitle: "Back",
          headerShown: true,
          headerStyle: { backgroundColor: "#4c0519" },
          // Makes background transparent

          headerTintColor: "white",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default _layout;
