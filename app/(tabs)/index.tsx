import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewComponent,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Index() {
  const name = "Philip";

  return (
    <SafeAreaView className=" h-screen  ">
      <StatusBar style="dark" />
      <View className="flex-row justify-between px-2">
        <TouchableOpacity className="">
          <Entypo name="menu" size={28} color="black" />
        </TouchableOpacity>
        <View className="items-center justify-center -mt-7">
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
        className="flex flex-row overflow-x-scroll mt-2 "
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col">
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
        </View>
        <View className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col">
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
            <Text className="font-bold">BP Tracker</Text>
          </View>
        </View>
        <View className="w-40 h-40 shadow-sm rounded-lg bg-white mx-2 flex flex-col">
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
