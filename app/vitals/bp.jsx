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
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
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

import { React, useState } from "react";

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

const BP = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const [modalVisible, setModalVisible] = useState(false);
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [entries, setEntries] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const router = useRouter();
  const data = [
    {
      value: 120,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Mon",
    },
    { value: 75, frontColor: theme.tint, gradientColor: "#93FCF8" },

    {
      value: 150,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Tue",
    },
    { value: 80, frontColor: theme.tint, gradientColor: "#93FCF8" },

    {
      value: 145,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Wed",
    },
    { value: 75, frontColor: theme.tint, gradientColor: "#93FCF8" },

    {
      value: 170,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Thur",
    },
    { value: 60, frontColor: theme.tint, gradientColor: "#93FCF8" },

    {
      value: 161,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Fri",
    },
    { value: 65, frontColor: theme.tint, gradientColor: "#93FCF8" },
    {
      value: 155,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Sat",
    },
    { value: 85, frontColor: theme.tint, gradientColor: "#93FCF8" },
    {
      value: 131,
      frontColor: "#9f1239",
      gradientColor: "#009FFF",
      spacing: 6,
      label: "Sun",
    },
    { value: 60, frontColor: theme.tint, gradientColor: "#93FCF8" },
  ];

  const handleSave = () => {
    const newEntry = { systolic, diastolic, time: timeOfDay };

    if (editingIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editingIndex] = newEntry;
      setEntries(updatedEntries);
      setEditingIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setModalVisible(false);
    setSystolic("");
    setDiastolic("");
    setTimeOfDay("Morning");
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSystolic("");
    setDiastolic("");
    setTimeOfDay("Morning");
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
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
        <Text
          style={{
            color: theme.text,
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Overview
        </Text>
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
          noOfSections={4}
          yAxisLabelTexts={["50", "100", "150", "200", "250"]}
          labelWidth={40}
          xAxisLabelTextStyle={{ color: theme.text, textAlign: "center" }}
        />
      </View>

      <ScrollView style={{ marginTop: 20, paddingHorizontal: 20 }}>
        {entries.map((entry, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
              padding: 10,
              borderRadius: 8,
              backgroundColor: theme.containerBackground,
            }}
          >
            <Text style={{ color: theme.text }}>
              {entry.time}: {entry.systolic}/{entry.diastolic}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  setSystolic(entry.systolic);
                  setDiastolic(entry.diastolic);
                  setTimeOfDay(entry.time);
                  setEditingIndex(index);
                  setModalVisible(true);
                }}
                style={{ marginRight: 10 }}
              >
                <Feather name="edit" size={18} color={theme.tint} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Feather name="trash-2" size={18} color="#9f1239" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          position: "absolute",
          bottom: 30,
          alignSelf: "center",
          backgroundColor: "#9f1239",
          paddingVertical: 14,
          paddingHorizontal: 30,
          borderRadius: 25,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{ color: "#d1d5db", fontWeight: "bold", fontSize: 16 }}>
          Add New Entry
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"} // Use padding for iOS to ensure content moves up when keyboard appears
          style={{
            flex: 1,

            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
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
                width: "80%",
                backgroundColor: theme.containerBackground,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Text style={{ marginBottom: 10, color: theme.text }}>
                Enter Systolic (e.g. 120)
              </Text>
              <TextInput
                keyboardType="numeric"
                value={systolic}
                onChangeText={setSystolic}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: theme.text,
                  marginBottom: 15,
                  color: theme.text,
                }}
              />
              <Text style={{ marginBottom: 10, color: theme.text }}>
                Enter Diastolic (e.g. 80)
              </Text>
              <TextInput
                keyboardType="numeric"
                value={diastolic}
                onChangeText={setDiastolic}
                style={{
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  borderBottomColor: theme.text,
                  color: theme.text,
                }}
              />
              <View style={{ marginBottom: 15 }}>
                <Text style={{ marginBottom: 5, color: theme.text }}>
                  Time of Day
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                >
                  <Picker
                    selectedValue={timeOfDay}
                    onValueChange={(itemValue) => setTimeOfDay(itemValue)}
                  >
                    <Picker.Item label="Morning" value="Morning" />
                    <Picker.Item label="Afternoon" value="Afternoon" />
                    <Picker.Item label="Evening" value="Evening" />
                  </Picker>
                </View>
              </View>

              <TouchableOpacity
                onPress={handleSave}
                style={{
                  backgroundColor: "#9f1239",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  {editingIndex !== null ? "Update" : "Save"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={closeModal}
                style={{
                  marginTop: 10,
                  backgroundColor: "#ddd",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#000", textAlign: "center" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};

export default BP;
