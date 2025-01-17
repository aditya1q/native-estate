import { useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, router } from "expo-router";
// Constants
import { featuredCards, cards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
// Components
import { FeaturedCards, RegularCards } from "@/components/Cards";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResult";
// utils
import { handleCardPress } from "@/utils/navigation";
import { filterCardsByCategory } from "@/utils/filterCards";

const SectionHeader = ({ title, text, navigateTo, navigation }) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="text-xl font-rubik-bold text-black-300">{title}</Text>
      {navigateTo && (
        <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
          <Text className="text-base font-rubik-bold text-primary-300">{text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default function Index() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCards, setVisibleCards] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const filteredRegularCards = filterCardsByCategory(cards, selectedCategory);

  const handleShowMore = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + 6);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={filteredRegularCards.length > 0 ? filteredRegularCards.slice(0, visibleCards) : []}
        renderItem={({ item }) => (
          <RegularCards data={item} onPress={() => handleCardPress(item, router)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperClassName="flex gap-5 px-3"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
        ListHeaderComponent={
          <View className="px-5">
            {/* User Info */}
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => navigation.navigate("profile")}
                className="flex flex-row items-center"
              >
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full border border-primary-200"
                />
                <View className="flex flex-col ml-3 justify-center">
                  <Text className="text-xs text-black-100 font-rubik">Good Morning</Text>
                  <Text className="text-base text-black-300 font-rubik-medium">
                    Aditya Tiwari
                  </Text>
                </View>
              </TouchableOpacity>
              <Image source={icons.bell} className="size-6" />
            </View>

            {/* Search */}
            <Search />

            {/* Featured Section */}
            <View className="my-5">
              <SectionHeader
                title="Featured"
                text="See All"
                navigateTo="explore"
                navigation={navigation}
              />
              {featuredCards.length === 0 ? (
                <NoResults />
              ) : (
                <FlatList
                  data={featuredCards?.slice(0, 4)}
                  renderItem={({ item }) => (
                    <FeaturedCards data={item} onPress={() => handleCardPress(item, router)} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="flex gap-5 mt-3"
                />
              )}
            </View>

            {/* Filters */}
            <Filters
              selectedCategory={selectedCategory}
              handleCategoryPress={(category) => setSelectedCategory(category)}
            />

            {/* Recommendations Section */}
            <SectionHeader
              title="Our Recommendation"
              text="See All"
              navigateTo="explore"
              navigation={navigation}
            />

            {/* Regular Cards Placeholder */}
            {filteredRegularCards.length === 0 && (
              <NoResults message="No recommendations found." />
            )}
          </View>
        }
        // show more button
        ListFooterComponent={
          filteredRegularCards.length > visibleCards ? (
            <View className="flex items-center mt-5">
              {isLoading ? (
                <ActivityIndicator size="large" color="primary-300" />
              ) : (
                <TouchableOpacity
                  onPress={handleShowMore}
                  className="bg-primary-300 px-5 py-2 rounded-lg"
                >
                  <Text className="text-white text-base">Show More</Text>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            <View className="flex items-center mt-5">
              <Text className="text-center w-full text-black-200">
                No more items to show
              </Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}
