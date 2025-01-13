import { FeaturedCards, RegularCards } from "@/components/Cards";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
// import { ScrollView } from "react-native-web";

export default function Index() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
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

          {/* Search */}
          <Search />

          {/* Featured */}
          <View className='my-5'>
            <View className='flex flex-row items-center justify-between'>

              <Text className='text-xl font-rubik-bold text-black-300'>
                Featured
              </Text>

              <TouchableOpacity>
                <Text className='text-base font-rubik-bold text-primary-300'>
                  See All
                </Text>
              </TouchableOpacity>

            </View>

            <View className='flex flex-row gap-5'>
              <FeaturedCards />
              <FeaturedCards />
              <FeaturedCards />
            </View>

          </View>

          {/* <View className='mt-5'> */}
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-xl font-rubik-bold text-black-300'>
              Our Recommendation
            </Text>
            <TouchableOpacity>
              <Text className='text-base font-rubik-bold text-primary-300'>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className='flex flex-row gap-2 w-full'>
            <RegularCards />
            <RegularCards />
            {/* <RegularCards />
              <RegularCards /> */}
          </View>
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}