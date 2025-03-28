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
} from "react-native";
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
const views = [
  {
    title: "Welcome to Dokota App",
    description: "Telemedicine for the elderly",
    image: require("../../assets/images/Doctor.png"),
  },
  {
    title: "Track Your BP & Blood sugar",
    description: "Monitor your blood pressure and sugar in real-time.",
    image: require("../../assets/images/Goal.png"),
  },
  {
    title: "Emergency Assistance",
    description: "Call an ambulance instantly.",
    image: require("../../assets/images/Healthcare.png"),
  },
];

const totalViews = views.length;
const duplicatedViews = [...views, ...views];

export default function Index() {
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
    <SafeAreaView className="h-screen ">
      <StatusBar style="dark" />

      <View className="z-20 flex-row justify-between px-2 ">
        <TouchableOpacity className="">
          <Entypo name="menu" size={28} color="black" />
        </TouchableOpacity>
        <View className="items-center justify-center -mt-8">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-40 h-24"
            resizeMode="contain"
          />
        </View>
        <View className="w-8">
          <TouchableOpacity className="">
            <MaterialIcons name="notifications-none" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        className="overflow-scroll -mb-8"
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-[calc(100%-16px)] bg-red-900 h-40 mx-2 rounded-2xl flex flex-row ">
          <View className="w-[60%] flex flex-col px-3 py-9">
            <Text
              style={{ fontFamily: "Poppins-Bold" }}
              className="text-slate-100 text-3xl"
            >
              Hello, {name}!
            </Text>
            <Text className="text-slate-300 text-md font-bold mt-6">
              How are you feeling today?
            </Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/Doctor.png")}
              className="w-44 h-40 mr-2"
              resizeMode="contain"
            />
          </View>
        </View>
        <Text className="mt-6 text-xl ml-2 font-bold ">Services</Text>
        <ScrollView
          className="flex flex-row overflow-x-scroll mt-6"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 145, overflow: "visible" }}
        >
          <TouchableOpacity className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col">
            <View className="flex flex-row">
              <View>
                <Image
                  source={require("../../assets/images/Consultant.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
              </View>
            </View>
            <View className="items-center justify-center mt-11">
              <Text className="font-bold">Consultation</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col">
            <View className="flex flex-row">
              <View>
                <Image
                  source={require("../../assets/images/Goal.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
              </View>
            </View>
            <View className="items-center justify-center mt-11">
              <Text className="font-bold">Vitals Tracker</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col">
            <View className="flex flex-row">
              <View>
                <Image
                  source={require("../../assets/images/Healthcare.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
              </View>
            </View>
            <View className="items-center justify-center mt-11">
              <Text className="font-bold">Emergency</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView
          className="flex flex-row overflow-x-scroll  mt-10"
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{ maxHeight: 145 }}
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
                source={view.image}
                className="w-20 h-20 absolute bottom-2 right-2"
                resizeMode="contain"
              />
            </View>
          ))}
        </ScrollView>

        <Text className="mt-6 text-xl ml-2 font-bold ">Top Doctors</Text>
        <View className="mt-6 px-2 w-full">
          <TouchableOpacity>
            <View className="w-full bg-white h-40 p-3 rounded-2xl flex flex-row shadow-sm justify-between ">
              <View className="w-28 h-full rounded-2xl bg-cyan-600 overflow-hidden ">
                <Image
                  source={require("../../assets/images/Doctor_profile_pic1.jpg")}
                  className="w-full h-full"
                  resizeMode="cover"
                ></Image>
              </View>
              <View className="flex flex-col ">
                <View className="flex justify-start">
                  <Text className="font-bold ">Dr. Emmanuel Kwakye</Text>
                  <Text>General Practitioner</Text>
                  <Text>Email: ekwakye@gmail.com</Text>
                </View>
                <View className="flex justify-end mt-auto ">
                  <Text>Fee: 100 cedis</Text>
                </View>
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row justify-start flex-start items-center">
                  <AntDesign name="star" size={20} color="gold" />
                  <Text className="ml-1">4.5/5</Text>
                </View>
                <View className="flex justify-end mt-auto">
                  <MaterialCommunityIcons
                    name="arrow-right-box"
                    size={50}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mt-3">
            <View className="w-full bg-white h-40 p-3 rounded-2xl flex flex-row shadow-sm justify-between ">
              <View className="w-28 h-full rounded-2xl bg-cyan-600 overflow-hidden ">
                <Image
                  source={require("../../assets/images/Doctor_profile_pic2.jpg")}
                  className="w-full h-full"
                  resizeMode="cover"
                ></Image>
              </View>
              <View className="flex flex-col ">
                <View className="flex justify-start">
                  <Text className="font-bold ">Dr. Rita Nsiah</Text>
                  <Text>General Practitioner</Text>
                  <Text>Email: ensiah@gmail.com</Text>
                </View>
                <View className="flex justify-end mt-auto ">
                  <Text>Fee: 150 cedis</Text>
                </View>
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row justify-start flex-start items-center">
                  <AntDesign name="star" size={20} color="gold" />
                  <Text className="ml-1">4.9/5</Text>
                </View>
                <View className="flex justify-end mt-auto">
                  <MaterialCommunityIcons
                    name="arrow-right-box"
                    size={50}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="mt-3">
            <View className="w-full bg-white h-40 p-3 rounded-2xl flex flex-row shadow-sm justify-between ">
              <View className="w-28 h-full rounded-2xl bg-cyan-600 overflow-hidden ">
                <Image
                  source={require("../../assets/images/Doctor_profile_pic3.jpg")}
                  className="w-full h-full"
                  resizeMode="cover"
                ></Image>
              </View>
              <View className="flex flex-col ">
                <View className="flex justify-start">
                  <Text className="font-bold ">Dr. Francis Sarfo</Text>
                  <Text>General Practitioner</Text>
                  <Text>Email: fsarfo@gmail.com</Text>
                </View>
                <View className="flex justify-end mt-auto ">
                  <Text>Fee: 90 cedis</Text>
                </View>
              </View>
              <View className="flex flex-col">
                <View className="flex flex-row justify-start flex-start items-center">
                  <AntDesign name="star" size={20} color="gold" />
                  <Text className="ml-1">3/5</Text>
                </View>
                <View className="flex justify-end mt-auto">
                  <MaterialCommunityIcons
                    name="arrow-right-box"
                    size={50}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Text className="mt-6 text-xl ml-2 font-bold mb-3">
            Recent activities
          </Text>
          <View className="flex flex-col shadow-sm  mt-4 px-2  bg-white rounded-2xl py-4 mb-32 w-full">
            <View className="h-14 w-full flex justify-between flex-row ">
              <View className="flex flex-col items-center">
                <View>
                  <FontAwesome name="dot-circle-o" size={24} color="#4c0519" />
                </View>
                <View className="w-1 bg-slate-400 h-full"></View>
              </View>
              <View className="flex flex-col w-[90%]">
                <Text className="font-bold">
                  You booked a consultation with Dr. Emmanuel Kwakye
                </Text>
                <Text className="">28 / 03 / 2025 • 3:42 PM</Text>
              </View>
            </View>
            <View className="h-14 w-full mt-7 flex justify-between flex-row ">
              <View className="flex flex-col items-center">
                <View>
                  <FontAwesome name="dot-circle-o" size={24} color="#4c0519" />
                </View>
                <View className="w-1 bg-slate-400 h-full"></View>
              </View>
              <View className="flex flex-col w-[90%]">
                <Text className="font-bold">
                  You logged your blood pressure
                </Text>
                <Text className="">28 / 03 / 2025 • 9:42 PM</Text>
              </View>
            </View>
            <View className="h-14 w-full mt-7 flex justify-between flex-row ">
              <View className="flex flex-col items-center">
                <View>
                  <FontAwesome name="dot-circle-o" size={24} color="#4c0519" />
                </View>
                <View className="w-1  h-full"></View>
              </View>
              <View className="flex flex-col w-[90%]">
                <Text className="font-bold">
                  You requested for emergency services
                </Text>
                <Text className="">28 / 03 / 2025 • 3:42 PM</Text>
              </View>
            </View>
            <View></View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
