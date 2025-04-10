import React from "react";
import {
  SafeAreaView,
  Appearance,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Route } from "expo-router/build/Route";

const Login = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    if (email === "nanaboatengphilip@gmail.com" && password === "Phil123") {
      router.replace("/(doctors_tabs)"); // doctor view
    } else if (
      email === "nanabeeeofficial@gmail.com" &&
      password === "Phil123"
    ) {
      router.replace("/(patients_tabs)"); // patient view
    } else {
      Alert.alert("Invalid email or password");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.containerBackground }}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        // keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0, }
      >
        <View
          style={{
            flex: 1,
            backgroundColor: theme.background,
          }}
          className="h-screen"
        >
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

          <View className="h-[50%] w-full relative bg-rose-950">
            <Image
              style={styles.backgroundImage}
              source={require("@/assets/images/loginDoctor4.jpg")}
              resizeMode="cover"
              blurRadius={8}
            />
          </View>

          <TouchableOpacity
            onPress={() => router.replace("/auth/get-started")}
            style={{ position: "absolute", top: 40, left: 10 }}
          >
            <Ionicons
              name="chevron-back-circle-sharp"
              size={40}
              color="#262626"
            />
          </TouchableOpacity>

          <View
            style={{ backgroundColor: theme.background }}
            className="h-[50%] w-full"
          ></View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              position: "absolute",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: "60%",
              backgroundColor: theme.containerBackground,
              paddingHorizontal: 10,

              bottom: 0,
              left: 0,
              right: 0,
            }}
            contentContainerStyle={{
              alignItems: "center", // ✅ Proper place for layout props
            }}
          >
            <View className="w-40 h-20">
              <Image
                style={styles.tinyLogo}
                source={require("../../assets/images/logo.png")}
                resizeMode="cover"
              />
            </View>
            <View className="items-center">
              <Text
                className="text-2xl font-bold"
                style={{ fontFamily: "Poppins-Bold", color: theme.mainText }}
              >
                Welcome back!
              </Text>
              <Text className="mt-2" style={{ color: theme.text }}>
                To get started, sign in to your account
              </Text>
            </View>
            <View className="w-full">
              <Text className="mt-6" style={{ color: theme.text }}>
                Email
              </Text>

              <TextInput
                placeholder=""
                className="w-full mt-2  p-3 rounded-lg "
                placeholderTextColor={theme.text}
                value={email}
                onChangeText={setEmail}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  backgroundColor: theme.containerBackground,
                  borderWidth: 1,
                  width: "100%",
                  borderColor: theme.text,
                  color: theme.icon,
                }}
              />

              <Text style={{ color: theme.text, marginTop: 16 }}>Password</Text>
              <View style={{ width: "100%", position: "relative" }}>
                <TextInput
                  placeholder=""
                  className="w-full mt-2  p-3 rounded-lg "
                  placeholderTextColor={theme.text}
                  secureTextEntry={!passwordVisible}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  style={{
                    backgroundColor: theme.containerBackground,
                    borderWidth: 1,
                    width: "100%",
                    borderColor: theme.text,
                    color: theme.icon,
                  }}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "60%",
                    transform: [{ translateY: -12 }],
                  }}
                >
                  <FontAwesome
                    name={passwordVisible ? "eye" : "eye-slash"}
                    size={20}
                    color={theme.text}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-full mt-2 flex flex-row justify-end items-end">
              <Text
                style={{
                  fontFamily: "roboto-bold",
                  color: theme.mainText,
                  fontSize: 16,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                Forgot password
              </Text>
            </View>
            <View className="w-full mt-6 items-center">
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Text
                className="mt-3"
                style={{
                  fontFamily: "roboto-bold",
                  color: theme.mainText,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Don't have an account?{" "}
                <Text
                  onPress={() => router.replace("/auth/login")}
                  style={{ textDecorationLine: "underline" }}
                >
                  Signup
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  tinyLogo: {
    width: "100%",
    height: "100%",
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
    borderRadius: 10,
    marginTop: 12,
    width: "100%",
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

  hero: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Takes up remaining vertical space
    paddingHorizontal: 20,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  heroText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
