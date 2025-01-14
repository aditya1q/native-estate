import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// constant
import { featuredCards, cards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
// component
import { FeaturedCards, RegularCards } from "@/components/Cards";
import Search from "@/components/Search";
import Filters from "@/components/Filters";

export const SectionHeader = ({ title, text }) => (
  <View className="flex flex-row items-center justify-between">
    <Text className="text-xl font-rubik-bold text-black-300">{title}</Text>
    <TouchableOpacity>
      <Text className="text-base font-rubik-bold text-primary-300">{text}</Text>
    </TouchableOpacity>
  </View>
);

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      {/* there are regular card */}
      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <RegularCards data={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerClassName='pb-32'
        columnWrapperClassName='flex gap-5 px-3'
        showsVerticalScrollIndicator={false}

        // header component
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image source={images.avatar} className="size-12 rounded-full" />
                <View className="flex flex-col ml-3 justify-center">
                  <Text className="text-xs text-black-100 font-rubik">
                    Good Morning
                  </Text>
                  <Text className="text-base text-black-300 font-rubik-medium">
                    Aditya Tiwari
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            {/* Search */}
            <Search />

            {/* Featured */}
            <View className="my-5">
              <SectionHeader title="Featured" text="See All" />

              <FlatList
                data={featuredCards}
                renderItem={({ item }) => (
                  <FeaturedCards data={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName='flex gap-5 mt-3'
              />
            </View>
            <Filters />
            {/* Flat Recommendation */}
            <SectionHeader title="Our Recommendation" text="See All" />
          </View>
        }
      />
    </SafeAreaView>
  );
}
