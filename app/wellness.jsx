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
import {
  Catamaran_400Regular,
  Catamaran_700Bold,
} from "@expo-google-fonts/catamaran";

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

const wellness = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
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
      <View className="items-center mt-6">
        <Text style={{ color: theme.icon }} className="font-bold">
          Doctor Claude's Health tip for today
        </Text>
      </View>
      <View className="mt-3 w-full px-3 h-72">
        <Image
          style={styles.doctor}
          source={require("@/assets/images/DoctorClaude.png")}
          resizeMode="contain"
        />
      </View>

      <View
        style={{ elevation: 7, backgroundColor: theme.containerBackground }}
        className="mx-3 mt-6 shadow-sm rounded-xl items-center p-3"
      >
        <Text
          style={{ color: theme.text }}
          className="font-bold text-jusify text-2xl"
        >
          Stay hydrated! Drinking at least 8 glasses of water daily helps boost
          energy, improve digestion, and keep your skin glowing. It also
          supports brain function and prevents dehydration-related headaches.
          Make water your go-to drink!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default wellness;
