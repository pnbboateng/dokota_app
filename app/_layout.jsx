import { Stack } from "expo-router";
import "./global.css";
import { Appearance } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useState, useEffect } from "react";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const segments = useSegments();
  const router = useRouter();

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const currentSegment = segments.join("/");

    // Don't redirect from get-started
    if (!userRole && !currentSegment.startsWith("auth/get-started")) {
      router.replace("/auth/get-started");
    } else if (userRole === "doctor") {
      router.replace("/(doctors_tabs)");
    } else if (userRole === "patient") {
      router.replace("/(patients_tabs)");
    }
  }, [userRole]);

  return (
    <Stack>
      <Stack.Screen
        name="auth/get-started"
        options={{ headerShown: false, animation: "slide_from_left" }}
      />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/signup" options={{ headerShown: false }} />

      <Stack.Screen
        name="(patients_tabs)"
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
        }}
      />

      <Stack.Screen
        name="wellness"
        options={{
          title: "Wellness Guide",
          headerBackTitle: "Back",

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
        name="vitals"
        options={{
          title: "Vitals",
          // headerBackTitle: "Back",

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
        name="consultation"
        options={{
          title: "Doctors",
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
        name="(doctors_tabs)"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  );
}
