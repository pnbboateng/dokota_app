import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewComponent,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Appearance,
} from "react-native";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import React from "react";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 105,
    height: 40,
  },
  doctor: {
    width: "100%",
    height: "100%",
  },
  icons: {
    marginLeft: 2,
    marginTop: 2,
    width: 70,
    height: 70,
  },
  carouselicons: {
    width: 70,
    height: 60,
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  doctorprofilepic: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.2,
  },
});

const Notifications = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();

  const name = "Philip Boateng";
  const email = "nanaboatengphilip@gmail.com";
  const balance = 200;
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

      <View className="items-center justify-center w-full h-full">
        <Text style={{ color: theme.icon }} className="font-bold">
          No notifications
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
