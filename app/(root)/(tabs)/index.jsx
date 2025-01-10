import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='px-5'>
        <View className='flex flex-row items-center justify-between mt-5'>

          <View className='flex flex-row items-center'>
            <Image source={images.avatar} className='size-12 rounded-full' />
            <View className='flex flex-col ml-3 justify-center'>
              <Text className='text-xs text-black-100 font-rubik'>Good Morning</Text>
              <Text className='text-base text-black-300 font-rubik-medium'>Aditya Tiwari</Text>
            </View>
          </View>

          <Image source={icons.bell} className='size-6' />
        </View>
      </View>
      <Search />
    </SafeAreaView>
  );
}
