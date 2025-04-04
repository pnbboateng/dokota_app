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
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import React, { useRef, useEffect, useState } from "react";

import { useLocalSearchParams } from "expo-router";

const doctors = [
  {
    id: 1,
    name: "Emmanuel Kwakye Frimpong",
    specialty: "General Practitioner",
    status: "Available",
    fee: 150,
    rating: 4.9,
    reviews: 40,
    yearsOfExperience: 7,
    patients: 1000,
    image: require("@/assets/images/Doctor_profile_pic1.jpg"),
    about:
      "Dr. Emmanuel Kwakye Frimpong is a highly skilled General Practitioner with over three years of experience providing quality healthcare. He has treated 1,000+ patients and is committed to preventive care, accurate diagnosis, and effective treatment plans.",
  },
  {
    id: 2,
    name: "Rita Nsiah",
    specialty: "General Practitioner",
    status: "Offline",
    fee: 150,
    rating: 4.9,
    reviews: 30,
    yearsOfExperience: 4,
    patients: 500,
    image: require("@/assets/images/Doctor_profile_pic2.jpg"),
    about:
      "Dr. Rita Nsiah is a compassionate General Practitioner with a strong passion for patient care. With three years of experience, she has helped 1,000+ patients through expert diagnosis, treatment, and patient education.",
  },
  {
    id: 3,
    name: "Francis Oduro",
    specialty: "General Practitioner",
    status: "Available",
    fee: 100,
    rating: 4.0,
    reviews: 10,
    yearsOfExperience: 1,
    patients: 100,
    image: require("@/assets/images/Doctor_profile_pic3.jpg"),
    about:
      "Dr. Francis Oduro is an experienced General Practitioner dedicated to improving patient health. He has treated over 1,000 patients and specializes in preventive healthcare and personalized treatment plans.",
  },
  {
    id: 4,
    name: "Emmanuella Amponsah",
    specialty: "General Practitioner",
    status: "Offline",
    fee: 120,
    rating: 4.4,
    reviews: 20,
    yearsOfExperience: 3,
    patients: 5000,
    image: require("@/assets/images/Doctor_profile_pic4.jpg"),
    about:
      "Dr. Emmanuella Amponsah is a skilled General Practitioner with three years of experience in primary care. She believes in patient-centered treatment and has successfully treated over 1,000 individuals.",
  },
  {
    id: 5,
    name: "Peter Antwi",
    specialty: "General Practitioner",
    status: "Available",
    fee: 130,
    rating: 4.7,
    reviews: 60,
    YearsOfExperience: 4,
    Patients: 700,
    image: require("@/assets/images/Doctor_profile_pic5.jpg"),
    about:
      "Dr. Peter Antwi is a dedicated General Practitioner known for his expertise in diagnosis and patient management. With 3+ years of experience, he has positively impacted the lives of 1,000+ patients.",
  },
];

const DoctorCard = ({ doctor }) => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const [isStarSelected, setIsStarSelected] = useState(false);
  const router = useRouter();
  return (
    <View className="h-screen justify-between">
      <View className="h-96 w-full bg-sky-300 overflow-hidden rounded-b-2xl">
        <Image
          className="overflow-hidden"
          style={{ width: "100%", height: "100%" }}
          source={doctor.image}
          resizeMode="cover"
        />
      </View>
      <ScrollView className="pb-2">
        <View>
          <View className="flex flex-row justify-between mt-3 px-4">
            <View className="flex flex-col">
              <Text style={{ color: theme.icon }} className="text-lg font-bold">
                Dr. {doctor.name}
              </Text>
              <Text style={{ color: theme.icon }}>{doctor.specialty}</Text>
            </View>
            <View className="flex flex-row items-center">
              <AntDesign name="star" size={20} color="gold" />
              <Text style={{ color: theme.icon }} className="ml-1 font-bold">
                {doctor.rating}/5
              </Text>
            </View>
          </View>
          <View className="px-4 mt-6">
            <Text style={{ color: theme.text }} className="text-lg ">
              Fee: {doctor.fee} cedis
            </Text>
          </View>

          <View className="flex-row justify-between mt-6 px-4">
            <View className="flex justify-center items-center flex-col">
              <View
                style={{ backgroundColor: theme.containerBackground }}
                className="rounded-full w-[60] h-[60] items-center justify-center"
              >
                <FontAwesome5
                  name="hospital-user"
                  size={30}
                  color={theme.icon}
                />
              </View>
              <Text style={{ color: theme.text }} className="mt-1 font-bold">
                {doctor.patients < 1000 ? doctor.patients : "1k+"}
              </Text>
              <Text style={{ color: theme.icon }} className="mt-2">
                Patients
              </Text>
            </View>

            <View className="flex justify-center items-center flex-col">
              <View
                style={{ backgroundColor: theme.containerBackground }}
                className="rounded-full w-[60] h-[60] items-center justify-center"
              >
                <Feather name="check-square" size={30} color={theme.icon} />
              </View>
              <Text style={{ color: theme.text }} className="mt-1 font-bold">
                {doctor.yearsOfExperience}+
              </Text>
              <Text style={{ color: theme.icon }} className="mt-2">
                Years
              </Text>
            </View>

            <View className="flex justify-center items-center flex-col">
              <TouchableOpacity
                onPress={() => setIsStarSelected(!isStarSelected)}
                style={{ backgroundColor: theme.containerBackground }}
                className="rounded-full w-[60] h-[60] items-center justify-center"
              >
                <AntDesign
                  name="star"
                  size={30}
                  color={isStarSelected ? "gold" : theme.icon}
                />
              </TouchableOpacity>
              <Text style={{ color: theme.text }} className="mt-1 font-bold">
                {doctor.rating}
              </Text>
              <Text style={{ color: theme.icon }} className="mt-2">
                Ratings
              </Text>
            </View>

            <View className="flex justify-center items-center flex-col">
              <TouchableOpacity
                onPress={() =>
                  router.push(
                    `/consultation/[id]/reviews?doctorId=${doctor.id}`
                  )
                }
                style={{ backgroundColor: theme.containerBackground }}
                className="rounded-full w-[60] h-[60] items-center justify-center"
              >
                <MaterialIcons name="message" size={30} color={theme.icon} />
              </TouchableOpacity>
              <Text style={{ color: theme.text }} className="mt-1 font-bold">
                {doctor.reviews}
              </Text>
              <Text style={{ color: theme.icon }} className="mt-2">
                Reviews
              </Text>
            </View>
          </View>

          <View className="mt-6 mb-3 px-4">
            <Text style={{ color: theme.text }} className="text-xl font-bold">
              About Me
            </Text>
            <Text
              style={{ color: theme.text }}
              numberOfLines={4}
              className="mt-2"
            >
              {doctor.about}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Chat Button */}
      <View className="flex justify-end m-auto px-4 mb-7 w-full">
        <TouchableOpacity
          className="w-full shadow-sm h-16 rounded-xl bg-rose-950 justify-center items-center"
          style={{ elevation: 7 }}
        >
          <Text
            style={{ fontFamily: "Poppins-Bold" }}
            className="text-gray-300"
          >
            Chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Doctor = () => {
  const { id } = useLocalSearchParams();
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text style={{ color: theme.text }}>No doctor found</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      }}
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <DoctorCard doctor={doctor} theme={theme} />
    </View>
  );
};

export default Doctor;
