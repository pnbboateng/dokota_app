import React from "react";
import {
  SafeAreaView,
  Appearance,
  View,
  Text,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Video } from "expo-av";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const GetStarted = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,

        // paddingBottom: Platform.OS === "android" ? 25 : 0, // Adjust manually if needed // Fix for TypeScript
      }}
      className="h-screen "
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      {/* <ImageBackground
        className="h-full w-full justify-center items-center"
        source={require("@/assets/images/dokota_video.gif")}
        style={styles.background}
        resizeMode="cover"
      > */}

      <Video
        source={require("@/assets/images/dokota_video2.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      />

      <View style={styles.hero} className="">
        <Text style={styles.heroText}>TELEMEDICINE FOR THE ELDERLY</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/auth/signup")}
        >
          <Text style={styles.buttonText}>Get Started as a Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/auth/signup")}
        >
          <Text style={styles.buttonText}>Get Started as a Doctor</Text>
        </TouchableOpacity>

        <Text className="mt-2" style={styles.buttonText}>
          Already have an account?{" "}
          <Text
            onPress={() => router.replace("/auth/login")}
            style={{ textDecorationLine: "underline" }}
          >
            Login
          </Text>
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#4c0519",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
    color: "#4c0519",
  },
  button: {
    backgroundColor: "#9f1239",
    padding: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 12,
    width: "80%",
    alignItems: "center",
    height: 50,
    elevation: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  buttonText: {
    fontFamily: "roboto-bold",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  doctor: {
    width: "100%",
    height: "100%",
  },
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Takes up remaining vertical space
    paddingHorizontal: 20,
  },

  heroText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
