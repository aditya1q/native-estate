import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import images from '@/constants/images';
import icons from '@/constants/icons';

export const FeaturedCards = ({ data, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
            <Image source={data.image} className='size-full relative rounded-2xl' />
            <Image source={images.cardGradient} className='size-full absolute bottom-0 rounded-2xl' />

            <View className='flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>
                    {data.rating}
                </Text>
            </View>

            <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
                <Text className='text-xl font-rubik-extrabold text-white' numberOfLines={1}>
                    {data.title}
                </Text>
                <Text className='text-[12px] font-rubik text-white'>
                    {data.location}
                </Text>
                <View className='flex flex-row items-center justify-between w-full'>
                    <Text className='font-rubik-extrabold text-xl text-white'>
                        {data.price}
                    </Text>
                    <Image source={icons.heart} className='size-5' />
                </View>
            </View>
        </TouchableOpacity>
    )
};

export const RegularCards = ({ data, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} className='flex flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white
         shadow-lg shadow-black-100/70 relative'>

            <View className='flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50'>
                <Image source={icons.star} className='size-2.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>
                    {data.rating}
                </Text>
            </View>
            <Image source={data.image} className='w-full h-32 rounded-lg' />

            <View className='flex flex-col mt-2'>
                <Text className='text-base font-rubik-bold text-black-300'>
                    {data.title}
                </Text>
                <Text className='text-[12px] font-rubik text-black-200'>
                    {data.location}
                </Text>
                <View className='flex flex-row items-center justify-between mt-2'>
                    <Text className='font-rubik-bold text-base text-primary-300'>
                        {data.price}
                    </Text>
                    <Image source={icons.heart} className='size-5 mr-2' tintColor='#191d31' />
                </View>
            </View>
        </TouchableOpacity>
    )
};

export const ExploreCard = ({ data, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-row w-full gap-4 mt-4 px-5 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 items-center">
            <View className="relative">
                {/* Rating Overlay */}
                <View className="flex flex-row items-center absolute top-2 left-16 bg-white/90 px-2 py-1 rounded-full z-50">
                    <Image source={icons.star} className="w-5 h-5" />
                    <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
                        {data.rating}
                    </Text>
                </View>

                {/* Image */}
                <Image source={data.image} className="w-32 h-32 rounded-lg" />
            </View>

            {/* Title and Price Section */}
            <View className="flex flex-row mt-2 w-full">
                {/* Title and Price Row */}
                <View className="flex flex-col items-start gap-2 w-[60%]">
                    <Text className="text-lg font-rubik-bold text-black-300">
                        {data.title}
                    </Text>
                    <Text className="text-sm font-rubik text-black-200">
                        {data.location}
                    </Text>
                    <View className='flex flex-row w-full justify-between'>
                        <Text className="text-lg font-rubik-bold text-primary-300 w-[90%]">
                            {data.price}
                        </Text>
                        <Image source={icons.heart} className="w-5 h-5" tintColor="#191d31" />
                    </View>
                </View>

            </View>
        </TouchableOpacity>

    )
}