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
  Modal,
} from "react-native";
import { useState } from "react";

import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
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
const Profile = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const name = "Philip Boateng";
  const email = "nanaboatengphilip@gmail.com";
  const balance = 200;

  const closeModal = () => {
    setModalVisible(false);
  };
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
      <View className="h-40 bg-rose-950 w-full rounded-b-2xl flex px-4 justify-end">
        <View className="pb-6 flex items-center flex-row">
          <View>
            <Feather name="user" size={40} color={theme.supportingText} />
          </View>
          <View className="ml-4 flex flex-col">
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-slate-100 text-2xl"
            >
              {name}
            </Text>
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-slate-300 text-md font-bold"
            >
              {email}
            </Text>
          </View>
        </View>
      </View>
      <View className="w-[calc(100%-16px)] shadow-sm bg-stone-950 h-40 mt-6 mx-2  justify-between rounded-2xl px-4 py-3 flex flex-row ">
        <View className="flex flex-col justify-start">
          <Text className="text-slate-300 text-xl font-bold ">Balance:</Text>
          <Text
            style={{ fontFamily: "Poppins-Bold" }}
            className="text-slate-100 mt-3 text-4xl"
          >
            GHC {balance}
          </Text>
        </View>
        <View className="flex flex-col justify-end">
          <TouchableOpacity
            className="w-36 h-12 rounded-xl bg-slate-200  justify-center items-center "
            style={{
              elevation: 7,
            }}
          >
            <Text style={{ fontFamily: "Poppins-Bold" }} className="">
              Top-up Wallet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        className="overflow-scroll mt-6"
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className=" mx-2">
          <TouchableOpacity onPress={() => router.push("/profile/edit")}>
            <View
              style={{
                elevation: 7,
                backgroundColor: theme.containerBackground,
                overflow: "hidden",
              }}
              className="w-full bg-white h-20  rounded-2xl flex flex-row shadow-sm items-center px-2"
            >
              <View className="">
                <Feather name="edit" size={32} color={theme.icon} />
              </View>

              <View className="flex-1 px-4 justify-center">
                <Text
                  style={{ color: theme.icon }}
                  className="text-pretty font-bold  text-lg leading-tight"
                >
                  Edit Profile
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
          <TouchableOpacity onPress={() => router.push("/profile/password")}>
            <View
              style={{
                elevation: 7,
                backgroundColor: theme.containerBackground,
                overflow: "hidden",
              }}
              className="w-full bg-white h-20  rounded-2xl flex flex-row shadow-sm items-center px-2"
            >
              <View className="">
                <Feather name="lock" size={32} color={theme.icon} />
              </View>

              <View className="flex-1 px-4 justify-center">
                <Text
                  style={{ color: theme.icon }}
                  className="text-pretty font-bold  text-lg leading-tight"
                >
                  Change Password
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
          <TouchableOpacity
            onPress={() => router.push("/profile/notificationsettings")}
          >
            <View
              style={{
                elevation: 7,
                backgroundColor: theme.containerBackground,
                overflow: "hidden",
              }}
              className="w-full bg-white h-20  rounded-2xl flex flex-row shadow-sm items-center px-2"
            >
              <View className="">
                <Ionicons
                  name="notifications-outline"
                  size={32}
                  color={theme.icon}
                />
              </View>

              <View className="flex-1 px-4 justify-center">
                <Text
                  style={{ color: theme.icon }}
                  className="text-pretty font-bold  text-lg leading-tight"
                >
                  Notifications Settings
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
          <TouchableOpacity className="" onPress={() => setModalVisible(true)}>
            <View
              style={{
                elevation: 7,
                backgroundColor: theme.containerBackground,
                overflow: "hidden",
              }}
              className="w-full bg-white h-20  rounded-2xl flex flex-row shadow-sm items-center px-2"
            >
              <View className="">
                <MaterialCommunityIcons
                  name="logout"
                  size={32}
                  color={theme.mainThemeIcons}
                />
              </View>

              <View className="flex-1 px-4 justify-center">
                <Text
                  style={{ color: theme.mainThemeIcons }}
                  className="text-pretty font-bold  text-lg leading-tight"
                >
                  Logout
                </Text>
              </View>

              <View className="items-center justify-center">
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={28}
                  color={theme.mainThemeIcons}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Modal visible={modalVisible} transparent={true}>
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                width: "70%",
                height: 100,
                backgroundColor: "white",
                flexDirection: "column",
                borderRadius: 10,
              }}
            >
              <View className="w-full items-center p-4">
                <Text className="font-bold">
                  Are you sure you want to logout?
                </Text>
              </View>
              <View className="flex w-full px-2 flex-row items-center justify-center gap-2">
                <TouchableOpacity
                  onPress={() => router.replace("/auth/get-started")}
                  style={{
                    backgroundColor: "#9f1239",
                    padding: 10,
                    borderRadius: 5,
                    height: 40,
                    width: "40%",
                  }}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Logout
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={closeModal}
                  style={{
                    backgroundColor: "#ddd",
                    padding: 10,
                    borderRadius: 5,
                    height: 40,
                    width: "40%",
                  }}
                >
                  <Text style={{ color: "#000", textAlign: "center" }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
