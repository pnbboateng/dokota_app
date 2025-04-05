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
import { BarChart } from "react-native-gifted-charts";
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

const Sugar = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const router = useRouter();
  const data = [
    {
      value: 7.7,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Mon",
    },
    {
      value: 5.7,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
    },

    {
      value: 3.0,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Tue",
    },
    {
      value: 7.0,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
    },

    {
      value: 1.9,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Wed",
    },
    {
      value: 5.5,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
    },

    {
      value: 1.6,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Thur",
    },
    {
      value: 9.0,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
    },

    {
      value: 6.3,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Fri",
    },
    {
      value: 3.0,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
    },

    {
      value: 5.5,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Sat",
    },
    {
      value: 4.0,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
    },

    {
      value: 4.2,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Sun",
    },
    {
      value: 2.0,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
    },
  ];
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
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          padding: 16,
          borderRadius: 20,
          backgroundColor: theme.containerBackground,
          overflow: "hidden",
        }}
      >
        <Text style={{ color: theme.text, fontSize: 16, fontWeight: "bold" }}>
          Overview
        </Text>
        <View style={{ paddingTop: 20, alignItems: "center" }}>
          <BarChart
            isAnimated
            data={data}
            barWidth={16}
            spacing={14}
            barBorderRadius={3}
            yAxisThickness={0}
            xAxisThickness={0}
            xAxisColor={theme.text}
            yAxisTextStyle={{ color: theme.text }}
            noOfSections={9}
            yAxisLabelTexts={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ]}
            labelWidth={40}
            xAxisLabelTextStyle={{ color: theme.text, textAlign: "center" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sugar;
