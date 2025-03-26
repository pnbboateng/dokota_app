import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";

const _Layout = () => {
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
          backgroundColor: "white",
          borderRadius: 70,
          height: 80,
          position: "absolute",

          overflow: "hidden",
          marginHorizontal: 10,
          marginBottom: 20,
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
                  color: focused ? "#4c0519" : "black",
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
                color={focused ? "#4c0519" : "black"}
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
                  color: focused ? "#4c0519" : "black",
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
              color={focused ? "#4c0519" : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <View>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  color: focused ? "#4c0519" : "black",
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
              color={focused ? "#4c0519" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
