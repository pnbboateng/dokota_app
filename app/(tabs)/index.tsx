import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewComponent,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between mx-2">
        <TouchableOpacity className="">
          <Entypo name="menu" size={28} color="black" />
        </TouchableOpacity>
        {/* <Image
          source={require("../../assets/images/logo.png")}
          className="w-28 h-16"
          resizeMode="contain"
        /> */}
        <View className="w-8" />
      </View>
    </SafeAreaView>
  );
}
