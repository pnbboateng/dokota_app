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
  TextInput,
  SectionList,
  Appearance,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const topDoctors = [
  {
    id: 1,
    name: "Emmanuel Kwakye Frimpong",
    specialty: "General Practitioner",
    status: "Available",
    fee: 150,
    rating: 4.9,
    image: require("@/assets/images/Doctor_profile_pic1.jpg"),
  },
  {
    id: 2,
    name: "Rita Nsiah",
    specialty: "General Practitioner",
    status: "Offline",
    fee: 150,
    rating: 4.9,
    image: require("@/assets/images/Doctor_profile_pic2.jpg"),
  },
  {
    id: 3,
    name: "Francis Oduro",
    specialty: "General Practitioner",
    status: "Available",
    fee: 100,
    rating: 4.0,
    image: require("@/assets/images/Doctor_profile_pic3.jpg"),
  },
  {
    id: 4,
    name: "Emmanuella Amponsah",
    specialty: "General Practitioner",
    status: "Offline",
    fee: 120,
    rating: 4.4,
    image: require("@/assets/images/Doctor_profile_pic4.jpg"),
  },
  {
    id: 4,
    name: "Peter Antwi",
    specialty: "General Practitioner",
    status: "Available",
    fee: 130,
    rating: 4.7,
    image: require("@/assets/images/Doctor_profile_pic5.jpg"),
  },
];

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

const DoctorCard = ({ doctor }) => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/services/consultation/${doctor.id}`)}
      className="mt-3 overflow-hidden"
    >
      <View
        style={{
          elevation: 7,
          backgroundColor: theme.containerBackground,
        }}
        className="w-full bg-white h-40 p-3 rounded-2xl flex flex-row shadow-sm justify-between"
      >
        <View className="flex flex-row">
          <View className="w-28 bg-cyan-600 h-full rounded-2xl overflow-hidden">
            <Image
              style={{ width: "100%", height: "100%" }}
              source={doctor.image}
              resizeMode="cover"
            />
          </View>
          <View className="ml-2 max-w-[130] md:max-w-[500]">
            <View className="flex">
              <Text
                style={{ color: theme.icon }}
                numberOfLines={1}
                ellipsizeMode="tail"
                className="font-bold"
              >
                Dr. {doctor.name}
              </Text>
              <Text style={{ color: theme.icon }} numberOfLines={1}>
                {doctor.specialty}
              </Text>
            </View>

            <View className="mt-3 flex flex-row items-center">
              <FontAwesome
                name="circle"
                size={10}
                color={doctor.status === "Available" ? "green" : "gray"}
              />
              <Text style={{ color: theme.icon }} className="ml-2">
                {doctor.status}
              </Text>
            </View>

            <View className="flex justify-end mt-auto">
              <Text style={{ color: theme.icon }}>Fee: {doctor.fee} cedis</Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col">
          <View className="flex flex-row justify-start items-center">
            <AntDesign name="star" size={20} color="gold" />
            <Text style={{ color: theme.icon }} className="ml-1">
              {doctor.rating}/5
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
  );
};

const index = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  // Function to filter and group doctors by first letter
  const getSections = () => {
    const filteredDoctors = topDoctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const groupedDoctors = filteredDoctors.reduce((acc, doctor) => {
      const firstLetter = doctor.name[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(doctor);
      return acc;
    }, {});

    return Object.keys(groupedDoctors)
      .sort()
      .map((letter) => ({
        title: letter,
        data: groupedDoctors[letter],
      }));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,

        // paddingBottom: Platform.OS === "android" ? 25 : 0, // Adjust manually if needed // Fix for TypeScript
      }}
      className="h-screen"
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="flex-1 h-full mt-2">
        <View className="p-4 w-full">
          <TextInput
            placeholder="Search for a doctor..."
            value={searchText}
            onChangeText={setSearchText}
            className="w-full  p-3 rounded-lg "
            placeholderTextColor={theme.text}
            style={{
              backgroundColor: theme.containerBackground,
              borderWidth: 1,
              borderColor: theme.text,
              color: theme.icon,
            }}
          />
        </View>

        {/* SectionList */}
        <View className="flex-1 h-full px-4 ">
          <SectionList
            className="mb-8"
            sections={getSections()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <DoctorCard doctor={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  color: theme.text,
                }}
                className="text-lg font-bold p-2 rounded-md mt-3"
              >
                {title}
              </Text>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
