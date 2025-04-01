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
} from "react-native";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useRef, useEffect } from "react";

const { width } = Dimensions.get("window"); // Get screen width
const viewWidth = width - 16; // Subtract mx-2 (8px on each side)

// Define views with content (text, image)

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

const Sos = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Expand effect
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0, // Fade out
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Reset scale
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1, // Reset opacity
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,

        paddingTop: Platform.OS === "android" ? 25 : 0, // Adjust manually if needed // Fix for TypeScript
      }}
      className="h-screen "
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

      <View className="z-20 flex-row justify-between items-center pb-4 px-2">
        <TouchableOpacity className="">
          <Entypo name="menu" size={28} color={theme.icon} />
        </TouchableOpacity>
        <View className="items-center justify-center ">
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/images/logo.png")}
            resizeMode="cover"
          />
        </View>
        <View className="w-8">
          <TouchableOpacity className="">
            <MaterialIcons
              name="notifications-none"
              size={28}
              color={theme.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 h-full w-full  items-center justify-center">
        <TouchableOpacity className="w-60 h-60 bg-rose-950 rounded-full items-center justify-center">
          <Text
            className="text-slate-100 text-4xl"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            SOS
          </Text>
          <Animated.View
            style={{
              position: "absolute",
              width: 240, // Make it bigger than the button
              height: 240,
              borderRadius: 120,
              backgroundColor: "rgba(190, 18, 60, 0.3)", // Light red for effect
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            }}
          />
        </TouchableOpacity>
        <View className="mt-14 w-60">
          <Text
            className="text-center"
            style={{ fontFamily: "Poppins-Bold", color: theme.icon }}
          >
            After pressing this SOS button, we will text your emergency
            contact(s) with your location
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sos;
