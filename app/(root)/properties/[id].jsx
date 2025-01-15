import { Image, SafeAreaView, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import icons from '@/constants/icons';
import { router } from 'expo-router';
import { about, facilities, gallery } from '@/constants/data';
import images from '@/constants/images';

const Properties = () => {
  const { title, location, rating, image, category, price } = useLocalSearchParams();

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View className='flex h-full gap-5'>
          {/* image */}
          <View className='relative w-full'>
            <Image source={image} className='h-96 w-full' />
            <View className='flex flex-row justify-between w-full z-50 absolute px-3 mt-2'>
              <TouchableOpacity onPress={() => router.back()} className='flex flex-row items-center justify-center bg-primary-200 rounded-full size-10'>
                <Image source={icons.backArrow} className='size-5' />
              </TouchableOpacity>
              <View className='flex flex-row items-center justify-center gap-4'>
                <Image source={icons.black_heart} className='size-7' />
                <Image source={icons.send} className='size-7' />
              </View>
            </View>
          </View>

          {/* headings */}
          <View className='flex flex-col gap-4 px-5'>
            <Text className='text-black-300 font-rubik-bold text-2xl'>{title}</Text>
            <View className='flex flex-row gap-3 items-center'>
              <Text className='text-primary-300 font-rubik-medium bg-primary-200 px-4 py-1 rounded-full uppercase text-xs'>{category}</Text>
              <View className='flex flex-row items-center gap-1'>
                <Image source={icons.star} className='size-5' />
                <Text className='text-sm font-rubik text-black-200'>{rating}&nbsp;(1,242 reviews)</Text>
              </View>
            </View>
            <View className='flex flex-row w-full justify-between '>
              {about.map(item => (
                <View key={item.id} className='flex flex-row gap-2 items-center justify-center'>
                  <View className='bg-primary-100 rounded-full size-10 items-center justify-center'>
                    <Image source={item.image} className='size-5' />
                  </View>
                  <Text className='font-rubik-medium text-base text-black-300'>{item.nums}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* About */}
          <View className='flex w-full gap-5 px-5'>
            <Text className='mt-5 text-black-300 font-rubik-bold text-2xl'>Agent</Text>
            <View className='flex flex-row justify-between items-center w-full'>
              <View className='flex flex-row gap-2'>
                <Image source={images.avatar} className='size-20' />
                <View className='flex justify-center'>
                  <Text className='text-xl font-rubik-bold text-black-300'>Aisha Tiwari</Text>
                  <Text className='text-md font-rubik-medium text-black-100'>Owner</Text>
                </View>
              </View>
              <View className='flex flex-row gap-4 items-center justify-center'>
                <Image source={icons.chat} className='size-8' />
                <Image source={icons.phone} className='size-8' />
              </View>
            </View>
          </View>

          {/* Overview */}
          <View className='flex justify-center gap-2 px-5'>
            <Text className='text-black-300 font-rubik-bold text-xl'>Overview</Text>
            <Text className='text-black-100 font-rubik text-md'>Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.</Text>
          </View>

          {/* Facilities */}
          <View className='flex justify-center gap-4 px-5'>
            <Text className='text-black-300 font-rubik-bold text-xl'>Facilities</Text>
            <View className='flex flex-row flex-1 flex-wrap gap-4 items-start justify-start w-full'>
              {facilities.map((item, idx) => (
                <View
                  key={idx}
                  className="flex flex-1 flex-col items-center min-w-16 max-w-20 gap-2"
                >
                  <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Image
                      source={item ? item.icon : icons.info}
                      className="size-6"
                    />
                  </View>
                  <Text className='text-black-200 text-sm' numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Gallery */}
          <View className='flex justify-center gap-4 px-5'>
            <Text className='text-black-300 font-rubik-bold text-xl'>Gallery</Text>
            <View className='flex flex-row gap-2 items-start justify-normal'>
              {gallery.map(item => (
                <TouchableOpacity key={item.id} className='flex '>
                  <Image source={item.image} className={`w-[107px] h-32 rounded-lg opacity-80 relative ${item.id === 3 && 'opacity-100'}`} />
                  {item.id === 3 && (
                    <Text className='absolute top-[40%] left-[35%] text-white/90 font-rubik-bold text-2xl'>20+</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Location */}

          <View className='flex justify-center gap-4 px-5'>
            <Text className='text-black-300 font-rubik-bold text-xl'>Location</Text>
            <View className='flex flex-row justify-start items-start gap-2'>
              <Image source={icons.location} className='size-5' />
              <Text className='text-black-200 font-rubik text-md'>{location}</Text>
            </View>
            <Image source={images.map} className='w-full h-52' />
          </View>

          {/* reviews */}
          <View className='flex justify-center gap-4 px-5'>
            <View className='flex flex-row items-center justify-between w-full'>
              <View className='flex flex-row gapp-2'>
                <Image source={icons.star} className='size-5' />
                <Text className='text-xl font-rubik-bold text-black-200'>{rating}&nbsp;(1,242 reviews)</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
              </TouchableOpacity>
            </View>
            <View className='flex justify-center gap-2'>
              <View className='flex flex-row gap-2 items-center'>
                <Image source={images.avatar} className='size-12' />
                <Text className='text-lg font-rubik-bold text-black-300'>Aisha Tiwari</Text>
              </View>
              <Text className='text-black-100 font-rubik text-sm leading-5'>The apartment is very clean and modern. I really like the interior design. Looks like I'll feel at home 😍</Text>
            </View>
          </View>

          {/* booking */}

          <View className="bg-white w-full rounded-t-2xl border-t border-r border-l border-primary-200 p-7">
            <View className="flex flex-row items-center justify-between gap-10">
              <View className="flex flex-col items-start">
                <Text className="text-black-200 text-md font-rubik-medium">
                  Price
                </Text>
                <Text
                  numberOfLines={1}
                  className="text-primary-300 text-start text-2xl font-rubik-bold"
                >
                  {price}
                </Text>
              </View>

              <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full shadow-md shadow-zinc-400">
                <Text className="text-white text-lg text-center font-rubik-bold">
                  Book Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Properties
