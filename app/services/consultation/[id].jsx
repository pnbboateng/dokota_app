import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Doctor = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

export default Doctor;
