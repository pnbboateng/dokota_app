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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
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
const reviewsData = {
  1: [
    { id: 1, user: "John Doe", rating: 5, text: "Excellent doctor!" },
    {
      id: 2,
      user: "Jane Smith",
      rating: 4,
      text: "Very professional and kind.",
    },
    { id: 3, user: "Kwame Boateng", rating: 5, text: "Best GP I've met." },
    { id: 4, user: "Amina Bello", rating: 5, text: "Highly recommended!" },
    {
      id: 5,
      user: "Yaw Mensah",
      rating: 4,
      text: "Listens carefully to patients.",
    },
    { id: 6, user: "Sophia Adams", rating: 4, text: "Great service and care." },
    { id: 7, user: "David Okafor", rating: 5, text: "Very knowledgeable." },
    { id: 8, user: "Nana Kofi", rating: 5, text: "Took his time with me." },
    { id: 9, user: "Efua Appiah", rating: 4, text: "Friendly and helpful." },
    { id: 10, user: "Samuel Osei", rating: 5, text: "Highly skilled doctor!" },
  ],
  2: [
    { id: 1, user: "Miriam", rating: 5, text: "Dr. Rita is amazing!" },
    { id: 2, user: "George", rating: 4, text: "Very good consultation." },
    { id: 3, user: "Esther", rating: 5, text: "Kind and understanding." },
    { id: 4, user: "Daniel", rating: 4, text: "I felt very comfortable." },
    { id: 5, user: "Alex", rating: 4, text: "Great experience!" },
    { id: 6, user: "Naomi", rating: 5, text: "Very professional!" },
    { id: 7, user: "Chris", rating: 4, text: "Listens carefully." },
    { id: 8, user: "Haruna", rating: 5, text: "Exceptional service." },
    { id: 9, user: "Patricia", rating: 4, text: "Will visit again." },
    { id: 10, user: "Kwesi", rating: 5, text: "Friendly and helpful." },
  ],
  3: [
    { id: 1, user: "John", rating: 5, text: " amazing!" },
    { id: 2, user: "Michael", rating: 4, text: "Very good consultation." },
    { id: 3, user: "Jude", rating: 5, text: "Kind and understanding." },
    { id: 4, user: "Daniel", rating: 4, text: "I felt very comfortable." },
    { id: 5, user: "Alex", rating: 4, text: "Great experience!" },
    { id: 6, user: "Naomi", rating: 5, text: "Very professional!" },
    { id: 7, user: "Chris", rating: 4, text: "Listens carefully." },
    { id: 8, user: "Haruna", rating: 5, text: "Exceptional service." },
    { id: 9, user: "Patricia", rating: 4, text: "Will visit again." },
    { id: 10, user: "Kwesi", rating: 5, text: "Friendly and helpful." },
  ],
  4: [
    { id: 1, user: "John", rating: 5, text: " amazing!" },
    { id: 2, user: "Michael", rating: 4, text: "Very good consultation." },
    { id: 3, user: "Jude", rating: 5, text: "Kind and understanding." },
    { id: 4, user: "Daniel", rating: 4, text: "I felt very comfortable." },
    { id: 5, user: "Alex", rating: 4, text: "Great experience!" },
    { id: 6, user: "Naomi", rating: 5, text: "Very professional!" },
    { id: 7, user: "Chris", rating: 4, text: "Listens carefully." },
    { id: 8, user: "Haruna", rating: 5, text: "Exceptional service." },
    { id: 9, user: "Patricia", rating: 4, text: "Will visit again." },
    { id: 10, user: "Kwesi", rating: 5, text: "Friendly and helpful." },
  ],
  5: [
    { id: 1, user: "John", rating: 5, text: " amazing!" },
    { id: 2, user: "Michael", rating: 4, text: "Very good consultation." },
    { id: 3, user: "Jude", rating: 5, text: "Kind and understanding." },
    { id: 4, user: "Daniel", rating: 4, text: "I felt very comfortable." },
    { id: 5, user: "Alex", rating: 4, text: "Great experience!" },
    { id: 6, user: "Naomi", rating: 5, text: "Very professional!" },
    { id: 7, user: "Chris", rating: 4, text: "Listens carefully." },
    { id: 8, user: "Haruna", rating: 5, text: "Exceptional service." },
    { id: 9, user: "Patricia", rating: 4, text: "Will visit again." },
    { id: 10, user: "Kwesi", rating: 5, text: "Friendly and helpful." },
  ],
};

const Reviews = () => {
  const colorScheme = Appearance.getColorScheme();
  const { doctorId } = useLocalSearchParams();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();

  const [reviews, setReviews] = useState(reviewsData[doctorId] || []);
  const [newReview, setNewReview] = useState("");

  const handleAddReview = () => {
    if (newReview.trim().length === 0) return;

    const newEntry = {
      id: reviews.length + 1,
      user: "Anonymous", // You can add a user authentication system
      rating: 5, // Default rating, could be customizable
      text: newReview,
    };

    setReviews([...reviews, newEntry]);
    setNewReview("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ backgroundColor: theme.background, flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            className="mt-3 mx-3 p-2 mb-3 rounded-lg "
            style={{ backgroundColor: theme.containerBackground }}
          >
            <Text className="font-bold" style={{ color: theme.text }}>
              {item.user}
            </Text>
            <Text style={{ color: theme.text }}>{item.text}</Text>
          </View>
        )}
      />

      <View
        className="flex flex-row pt-5 pb-11 px-3 rounded-t-xl"
        style={{ backgroundColor: theme.containerBackground }}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a review..."
          placeholderTextColor="#888"
          value={newReview}
          onChangeText={setNewReview}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddReview}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  user: {
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    color: "#555",
  },

  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#4c0519",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Reviews;
