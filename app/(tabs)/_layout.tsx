import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Appearance } from "react-native";

import { Colors } from "@/constants/Colors";

const _Layout = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Prevent rendering until fonts load
  }

  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        },
        tabBarIconStyle: {
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: theme.containerBackground,
          borderRadius: 70,
          height: 80,
          position: "absolute",
          borderTopWidth: 0,

          marginHorizontal: 10,
          marginBottom: 20,
          shadowColor: "black",
          shadowOffset: { width: 1, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5, // For Android
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <View>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  color: focused ? theme.mainThemeIcons : theme.tint,
                }}
              >
                Home
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Entypo
                name="home"
                size={24}
                color={focused ? theme.mainThemeIcons : theme.tint}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="sos"
        options={{
          title: "SOS",
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <View>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  color: focused ? theme.mainThemeIcons : theme.tint,
                }}
              >
                SOS
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="emergency-share"
              size={24}
              color={focused ? theme.mainThemeIcons : theme.tint}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
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
          tabBarLabel: ({ focused }) => (
            <View>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  color: focused ? theme.mainThemeIcons : theme.tint,
                }}
              >
                Profile
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-circle-o"
              size={24}
              color={focused ? theme.mainThemeIcons : theme.tint}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
