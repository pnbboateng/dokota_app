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
import { useRouter } from "expo-router";
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
const views = [
  {
    title: "Welcome to Dokota App",
    description: "Telemedicine for the elderly",
    image: require("../../assets/images/Doctor.png"),
  },
  {
    title: "Track Your BP & Blood sugar",
    description: "Monitor your blood pressure and sugar in real-time.",
    image: require("../../assets/images/Checklist_lightmode.png"),
  },
  {
    title: "Emergency Assistance",
    description: "Call an ambulance instantly.",
    image: require("../../assets/images/ambulance_darkmode.png"),
  },
];

const totalViews = views.length;
const duplicatedViews = [...views, ...views];

export default function Index() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
  const name = "Philip";
  const scrollViewRef = useRef<ScrollView>(null);
  let scrollPosition = 0;
  const totalViews = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollPosition += viewWidth + 16; // Move to next view

        scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });

        // When reaching the last duplicated item, reset to the start
        if (scrollPosition >= totalViews * (viewWidth + 16)) {
          setTimeout(() => {
            scrollViewRef.current?.scrollTo({ x: 0, animated: false });
            scrollPosition = 0;
          }, 500); // Small delay to prevent flickering
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
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
        <TouchableOpacity>
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
      <ScrollView
        className="overflow-scroll -mb-8"
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-[calc(100%-16px)] bg-red-950 h-40 mt-3 mx-2 rounded-2xl flex flex-row ">
          <View className="w-[60%] flex flex-col pl-3 py-9 justify-start">
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-slate-100 text-2xl"
            >
              Hello, {name}!
            </Text>
            <Text className="text-slate-300 text-md font-bold mt-6">
              How are you feeling today?
            </Text>
          </View>
          <View className="flex w-full h-full flex-1 ml-auto">
            <Image
              style={styles.doctor}
              source={require("../../assets/images/Doctor.png")}
              className=""
              resizeMode="contain"
            />
          </View>
        </View>
        <Text
          style={{ color: theme.icon }}
          className="mt-10 text-xl ml-2 font-bold "
        >
          Services
        </Text>
        <ScrollView
          className="flex flex-row overflow-visible  mt-2"
          horizontal={true}
          contentContainerStyle={{ flexGrow: 1 }}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
        >
          <TouchableOpacity
            style={{ elevation: 7, backgroundColor: theme.containerBackground }}
            className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col"
          >
            <View className="flex flex-row">
              <View>
                <Image
                  style={styles.icons}
                  source={
                    colorScheme === "dark"
                      ? require("../../assets/images/Consultation_lightmode.png")
                      : require("../../assets/images/Consultation_lightmode.png")
                  }
                  resizeMode="contain"
                />
              </View>
            </View>
            <View className="items-center justify-center mt-11">
              <Text style={{ color: theme.icon }} className="font-bold">
                Consultation
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ elevation: 7, backgroundColor: theme.containerBackground }}
            className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col"
          >
            <View className="flex flex-row">
              <View>
                <Image
                  style={styles.icons}
                  source={
                    colorScheme === "dark"
                      ? require("../../assets/images/Checklist_darkmode.png")
                      : require("../../assets/images/Checklist_lightmode.png")
                  }
                  resizeMode="contain"
                />
              </View>
            </View>
            <View className="items-center justify-center mt-11">
              <Text style={{ color: theme.icon }} className="font-bold">
                Vitals Tracker
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ elevation: 7, backgroundColor: theme.containerBackground }}
            className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col"
          >
            <View className="flex flex-row">
              <View>
                <Image
                  style={styles.icons}
                  source={
                    colorScheme === "dark"
                      ? require("../../assets/images/ambulance_darkmode.png")
                      : require("../../assets/images/ambulance_lightmode.png")
                  }
                  resizeMode="contain"
                />
              </View>
            </View>
            <View className="items-center justify-center mt-11">
              <Text style={{ color: theme.icon }} className="font-bold">
                Emergency
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView
          className="flex flex-row overflow-x-scroll overflow-y-hidden  mt-10"
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{ maxHeight: 170 }}
        >
          {duplicatedViews.map((view, index) => (
            <View
              key={index}
              className={"h-40 mx-2 rounded-2xl bg-black p-4"}
              style={{
                width: viewWidth,
                marginLeft: index === 0 ? 8 : 9,
                marginRight: 8,
              }}
            >
              {/* Content inside each view */}
              <Text className="text-white font-bold text-xl">{view.title}</Text>
              <Text className="text-white text-sm mt-2">
                {view.description}
              </Text>
              <Image
                style={styles.carouselicons}
                source={view.image}
                resizeMode="contain"
              />
            </View>
          ))}
        </ScrollView>

        <Text
          style={{ color: theme.icon }}
          className="mt-10 text-xl ml-2 font-bold "
        >
          Top Doctors
        </Text>
        <View className="mt-2 px-2 w-full">
          <TouchableOpacity>
            <View
              style={{
                elevation: 7,
                backgroundColor: theme.containerBackground,
              }}
              className="w-full bg-white h-40 p-3 rounded-2xl flex flex-row shadow-sm justify-between "
            >
              <View className="     flex flex-row ">
                <View className="w-28 bg-cyan-600 h-full rounded-2xl overflow-hidden">
                  <Image
                    style={styles.doctorprofilepic}
                    source={require("../../assets/images/Doctor_profile_pic1.jpg")}
                    resizeMode="cover"
                  ></Image>
                </View>
                <View className="ml-2 max-w-[150] md:max-w-[500]">
                  <View className="flex ">
                    <Text
                      style={{ color: theme.icon }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      className="font-bold "
                    >
                      Dr. Emmanuel Kwakye Frimpong
                    </Text>
                    <Text
                      style={{ color: theme.icon }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      General Practitioner
                    </Text>
                  </View>
                  <View className="mt-3 flex flex-row items-center">
                    <FontAwesome name="circle" size={10} color="green" />
                    <Text style={{ color: theme.icon }} className="ml-2">
                      Available
                    </Text>
                  </View>
                  <View className="flex justify-end mt-auto ">
                    <Text style={{ color: theme.icon }}>Fee: 150 cedis</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row justify-start flex-start items-center">
                  <AntDesign name="star" size={20} color="gold" />
                  <Text style={{ color: theme.icon }} className="ml-1">
                    4.9/5
                  </Text>
                </View>
                <View className="flex justify-end mt-auto">
                  <MaterialCommunityIcons
                    name="arrow-right-box"
                    size={50}
                    color={theme.icon}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mt-3">
            <View
              style={{
                elevation: 7,
                backgroundColor: theme.containerBackground,
              }}
              className="w-full bg-white h-40 p-3 rounded-2xl flex flex-row shadow-sm justify-between "
            >
              <View className="     flex flex-row ">
                <View className="w-28 bg-cyan-600 h-full rounded-2xl overflow-hidden">
                  <Image
                    style={styles.doctorprofilepic}
                    source={require("../../assets/images/Doctor_profile_pic2.jpg")}
                    resizeMode="cover"
                  ></Image>
                </View>
                <View className="ml-2 max-w-[150] md:max-w-[500]">
                  <View className="flex ">
                    <Text
                      style={{ color: theme.icon }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      className="font-bold "
                    >
                      Dr. Rita Nsiah
                    </Text>
                    <Text
                      style={{ color: theme.icon }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      General Practitioner
                    </Text>
                  </View>
                  <View className="mt-3 flex flex-row items-center">
                    <FontAwesome name="circle" size={10} color="gray" />
                    <Text style={{ color: theme.icon }} className="ml-2">
                      Offline
                    </Text>
                  </View>
                  <View className="flex justify-end mt-auto ">
                    <Text style={{ color: theme.icon }}>Fee: 150 cedis</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row justify-start flex-start items-center">
                  <AntDesign name="star" size={20} color="gold" />
                  <Text style={{ color: theme.icon }} className="ml-1">
                    4.9/5
                  </Text>
                </View>
                <View className="flex justify-end mt-auto">
                  <MaterialCommunityIcons
                    name="arrow-right-box"
                    size={50}
                    color={theme.icon}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mt-3">
            <View
              style={{
                elevation: 7,
                backgroundColor: theme.containerBackground,
              }}
              className="w-full bg-white h-40 p-3 rounded-2xl flex flex-row shadow-sm justify-between "
            >
              <View className="     flex flex-row ">
                <View className="w-28 bg-cyan-600 h-full rounded-2xl overflow-hidden">
                  <Image
                    style={styles.doctorprofilepic}
                    source={require("../../assets/images/Doctor_profile_pic3.jpg")}
                    resizeMode="cover"
                  ></Image>
                </View>
                <View className="ml-2 max-w-[150] md:max-w-[500]">
                  <View className="flex ">
                    <Text
                      style={{ color: theme.icon }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      className="font-bold "
                    >
                      Dr. Francis Oduro
                    </Text>
                    <Text
                      style={{ color: theme.icon }}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      General Practitioner
                    </Text>
                  </View>
                  <View className="mt-3 flex flex-row items-center">
                    <FontAwesome name="circle" size={10} color="green" />
                    <Text style={{ color: theme.icon }} className="ml-2">
                      Available
                    </Text>
                  </View>
                  <View className="flex justify-end mt-auto ">
                    <Text style={{ color: theme.icon }}>Fee: 100 cedis</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row justify-start flex-start items-center">
                  <AntDesign name="star" size={20} color="gold" />
                  <Text style={{ color: theme.icon }} className="ml-1">
                    4.0/5
                  </Text>
                </View>
                <View className="flex justify-end mt-auto">
                  <MaterialCommunityIcons
                    name="arrow-right-box"
                    size={50}
                    color={theme.icon}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text
            style={{ color: theme.icon }}
            className="mt-10 text-xl ml-2 font-bold "
          >
            Recent activities
          </Text>
          <View
            style={{ elevation: 7, backgroundColor: theme.containerBackground }}
            className="flex flex-col shadow-sm  mt-2 px-2  bg-white rounded-2xl py-4  w-full"
          >
            <View className="h-14 w-full flex justify-between flex-row ">
              <View className="flex flex-col items-center">
                <View>
                  <FontAwesome
                    name="dot-circle-o"
                    size={24}
                    color={theme.mainThemeIcons}
                  />
                </View>
                <View className="w-1 bg-slate-400 h-full"></View>
              </View>
              <View className="flex flex-col w-[90%]">
                <Text style={{ color: theme.icon }} className="font-bold">
                  You booked a consultation with Dr. Emmanuel Kwakye
                </Text>
                <Text style={{ color: theme.icon }} className="">
                  28 / 03 / 2025 • 3:42 PM
                </Text>
              </View>
            </View>
            <View className="h-14 w-full mt-7 flex justify-between flex-row ">
              <View className="flex flex-col items-center">
                <View>
                  <FontAwesome
                    name="dot-circle-o"
                    size={24}
                    color={theme.mainThemeIcons}
                  />
                </View>
                <View className="w-1 bg-slate-400 h-full"></View>
              </View>
              <View className="flex flex-col w-[90%]">
                <Text style={{ color: theme.icon }} className="font-bold">
                  You logged your blood pressure
                </Text>
                <Text style={{ color: theme.icon }} className="">
                  28 / 03 / 2025 • 9:42 PM
                </Text>
              </View>
            </View>
            <View className="h-14 w-full mt-7 flex justify-between flex-row ">
              <View className="flex flex-col items-center">
                <View>
                  <FontAwesome
                    name="dot-circle-o"
                    size={24}
                    color={theme.mainThemeIcons}
                  />
                </View>
                <View className="w-1  h-full"></View>
              </View>
              <View className="flex flex-col w-[90%]">
                <Text style={{ color: theme.icon }} className="font-bold">
                  You requested for emergency services
                </Text>
                <Text style={{ color: theme.icon }} className="">
                  28 / 03 / 2025 • 3:42 PM
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{ color: theme.icon }}
            className="mt-10 text-xl ml-2 font-bold "
          >
            Wellness Guide
          </Text>
          <View className="mb-40">
            <TouchableOpacity className="mt-2">
              <View
                style={{
                  elevation: 7,
                  backgroundColor: theme.containerBackground,
                  overflow: "hidden",
                }}
                className="w-full bg-white h-40  rounded-2xl flex flex-row shadow-sm items-center"
              >
                <Image
                  source={require("../../assets/images/WellnessGuide.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <View className="w-32 h-full rounded-lg overflow-hidden">
                  <Image
                    style={styles.doctorprofilepic}
                    source={require("../../assets/images/HealthTip2.png")}
                    resizeMode="contain"
                  />
                </View>

                <View className="flex-1 px-4 justify-center">
                  <Text
                    style={{ color: theme.icon }}
                    className="text-pretty font-bold text-gray-800 text-lg leading-tight"
                  >
                    Your daily source for health tips and wellness insights.
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
