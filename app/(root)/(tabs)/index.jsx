import { useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
// Constants
import { featuredCards, cards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
// Components
import { FeaturedCards, RegularCards } from "@/components/Cards";
import Search from "@/components/Search";
import Filters from "@/components/Filters";

const SectionHeader = ({ title, text, navigateTo }) => {
  const navigation = useNavigation();
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
  const navigation = useNavigation()
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRegularCards =
    selectedCategory === "All"
      ? cards?.slice(0, 4)
      : cards?.filter((card) => card.category === selectedCategory);

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={filteredRegularCards}
        renderItem={({ item }) => <RegularCards data={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperClassName="flex gap-5 px-3"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
        ListHeaderComponent={
          <View className="px-5">
            {/* User Info */}
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity onPress={() => navigation.navigate('profile')} className="flex flex-row items-center">
                <Image source={images.avatar} className="size-12 rounded-full border border-primary-200" />
                <View className="flex flex-col ml-3 justify-center">
                  <Text className="text-xs text-black-100 font-rubik">
                    Good Morning
                  </Text>
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
              <SectionHeader title="Featured" text="See All" navigateTo="explore" />
              <FlatList
                data={featuredCards?.slice(0, 4)}
                renderItem={({ item }) => <FeaturedCards data={item} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-3"
              />
            </View>

            {/* Filters */}
            <Filters
              selectedCategory={selectedCategory}
              handleCategoryPress={(category) => setSelectedCategory(category)}
            />

            {/* Recommendations Section */}
            <SectionHeader title="Our Recommendation" text="See All" navigateTo="explore" />
          </View>
        }
      />
    </SafeAreaView>
  );
}
