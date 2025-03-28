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
import React, { useRef, useEffect } from "react";

const { width } = Dimensions.get("window"); // Get screen width
const viewWidth = width - 16; // Subtract mx-2 (8px on each side)

// Define views with content (text, image)
const views = [
  {
    color: "bg-red-900",
    title: "Welcome to Dokota App",
    description: "Your health is our priority.",
    image: require("../../assets/images/Doctor.png"),
  },
  {
    color: "bg-blue-900",
    title: "Track Your BP",
    description: "Monitor your blood pressure in real-time.",
    image: require("../../assets/images/Goal.png"),
  },
  {
    color: "bg-green-900",
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
    <SafeAreaView className=" h-screen  ">
      <StatusBar style="dark" />
      <View className="flex-row justify-between px-2">
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
      <Text className="mt-3 text-xl ml-2 font-bold ">Services</Text>
      <ScrollView
        className="flex flex-row overflow-x-scroll mt-3"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 145 }}
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
        className="flex flex-row overflow-x-scroll mt-3"
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ maxHeight: 145 }}
      >
        {duplicatedViews.map((view, index) => (
          <View
            key={index}
            className={`${view.color} h-40 mx-2 rounded-2xl p-4`}
            style={{
              width: viewWidth,
              marginLeft: index === 0 ? 8 : 9,
              marginRight: 8,
            }}
          >
            {/* Content inside each view */}
            <Text className="text-white font-bold text-xl">{view.title}</Text>
            <Text className="text-white text-sm mt-2">{view.description}</Text>
            <Image
              source={view.image}
              className="w-20 h-20 absolute bottom-2 right-2"
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>

      <Text className="mt-2 text-xl ml-2 font-bold ">Recent Activities</Text>
    </SafeAreaView>
  );
}
