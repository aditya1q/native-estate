import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "@/constants/images";
import { router } from "expo-router";

const NoResults = ({ message }) => {
  // const handleBack = () => {
  //   router.push("/");
  // };

  return (
    <View className="flex items-center justify-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
        No Results Found
      </Text>
      <Text className="text-base text-black-100 mt-2 text-center px-5">
        { message || `We couldn't find any results.`}
      </Text>
      {/* <TouchableOpacity
        onPress={handleBack}
        className="mt-5 px-6 py-3 bg-primary-300 rounded-full"
      >
        <Text className="text-white text-base font-rubik-medium">Go Back</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default NoResults;
