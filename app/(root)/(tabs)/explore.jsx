import { useState } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
// constant
import { cards } from "@/constants/data";
import icons from "@/constants/icons";
// component
import { ExploreCard } from "@/components/Cards";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResult";
// utils
import { handleCardPress } from "@/utils/navigation";
import { filterCardsByCategory } from "@/utils/filterCards";

export default function explore() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRegularCards = filterCardsByCategory(cards, selectedCategory);

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={filteredRegularCards}
        renderItem={({ item }) => (
          <ExploreCard data={item} onPress={() => handleCardPress(item, router)} />
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
            <Text className='text-black-300 font-rubik-bold text-2xl'>Found {filteredRegularCards.length} Apartments</Text>
            {filteredRegularCards.length === 0 && (
              <NoResults message="No recommendations found." />
            )}
          </View>
        }
      />
    </SafeAreaView>
  );
}
