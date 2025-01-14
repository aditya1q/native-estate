import { useState } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// constant
import { cards } from "@/constants/data";
// component
import { ExploreCard, RegularCards } from "@/components/Cards";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import icons from "@/constants/icons";
import { router } from "expo-router";

export default function explore() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRegularCards =
    selectedCategory === 'All' ?
      cards :
      cards.filter((card) => card.category === selectedCategory)

  return (
    <SafeAreaView className="bg-white h-full">
      {/* there are regular card */}
      <FlatList
        data={filteredRegularCards}
        renderItem={({ item }) => (
          <ExploreCard data={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        contentContainerClassName='pb-32'
        showsVerticalScrollIndicator={false}

        // header component
        ListHeaderComponent={
          <View className="px-5">
            <View className='flex flex-row justify-between mt-4 items-center'>
              <TouchableOpacity onPress={() => router.back()} className='flex flex-row items-center justify-center bg-primary-200 rounded-full size-10'>
                <Image source={icons.backArrow} className='size-5' />
              </TouchableOpacity>
              <Text className='text-black-300 font-rubik-medium text-base text-center'>Search for Your Ideal Home</Text>
              <Image source={icons.bell} className='size-8' />
            </View>
            {/* Search */}
            <Search />
            {/* filters */}
            <Filters
              selectedCategory={selectedCategory}
              handleCategoryPress={(category) => setSelectedCategory(category)}
            />
            {/* <ExploreCard /> */}
            <Text className='text-black-300 font-rubik-bold text-2xl'>Found {filteredRegularCards.length} Apartments</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
