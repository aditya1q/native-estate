import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
// import { TextInput } from 'react-native-web'
// import { useLocalSearchParams, usePathname } from 'expo-router'

const Search = () => {
    // const path = usePathname();
    // const params = useLocalSearchParams();
    return (
        <View className='flex flex-row items-center justify-between w-full 
    px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5'>
            <View className='flex-1 flex flex-row items-center justify-center z-50'>
                <Image source={icons.search} className='size-5' />
                <TextInput
                    value=''
                    placeholder='search for anything'
                    className='text-sm font-rubik text-black-300 ml-2 flex-1'
                />
            </View>

            <TouchableOpacity>
                <Image source={icons.filter} className='size-5' />
            </TouchableOpacity>
        </View>
    )
}

export default Search