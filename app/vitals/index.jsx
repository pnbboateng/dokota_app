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
import Fontisto from "@expo/vector-icons/Fontisto";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
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

const Vitals = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,

        // paddingBottom: Platform.OS === "android" ? 25 : 0,
      }}
      className="h-screen "
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="mt-6 mx-2">
        <TouchableOpacity onPress={() => router.push("/vitals/bp")}>
          <View
            style={{
              elevation: 7,
              backgroundColor: theme.containerBackground,
              overflow: "hidden",
            }}
            className="w-full bg-white h-28  rounded-2xl flex flex-row shadow-sm items-center px-2"
          >
            <View className="">
              <Image
                style={styles.icons}
                source={
                  colorScheme === "dark"
                    ? require("@/assets/images/blood-pressure_darkmode.png")
                    : require("@/assets/images/blood-pressure_lightmode.png")
                }
                resizeMode="contain"
              />
            </View>

            <View className="flex-1 px-4 ml-2 justify-center">
              <Text
                style={{ color: theme.icon }}
                className="text-pretty font-bold  text-lg leading-tight"
              >
                Blood Pressure
              </Text>
            </View>

            <View className="items-center justify-center">
              <MaterialIcons
                name="arrow-forward-ios"
                size={28}
                color={theme.icon}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-2 mx-2">
        <TouchableOpacity onPress={() => router.push("/vitals/sugar")}>
          <View
            style={{
              elevation: 7,
              backgroundColor: theme.containerBackground,
              overflow: "hidden",
            }}
            className="w-full bg-white h-28  rounded-2xl flex flex-row shadow-sm items-center px-2"
          >
            <View className="">
              <Image
                style={styles.icons}
                source={
                  colorScheme === "dark"
                    ? require("@/assets/images/sugar-blood-level.png")
                    : require("@/assets/images/sugar-blood-level.png")
                }
                resizeMode="contain"
              />
            </View>

            <View className="flex-1 px-4 ml-2 justify-center">
              <Text
                style={{ color: theme.icon }}
                className="text-pretty font-bold  text-lg leading-tight"
              >
                Blood Sugar Level
              </Text>
            </View>

            <View className="items-center justify-center">
              <MaterialIcons
                name="arrow-forward-ios"
                size={28}
                color={theme.icon}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Vitals;
