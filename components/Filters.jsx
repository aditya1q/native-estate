import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { categories } from '@/constants/data';

const Filters = ({ selectedCategory, handleCategoryPress }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-3 mb-2"
        >
            {categories?.map(item => (
                <TouchableOpacity
                    key={item.category}
                    onPress={() => handleCategoryPress(item.category)}
                    className={`mr-3 rounded-full px-4 py-1 mb-4 
            ${selectedCategory === item.category
                            ? 'bg-primary-300'
                            : 'bg-primary-100 border border-primary-200'}`}
                >
                    <Text
                        className={`text-md font-rubik-medium 
              ${selectedCategory === item.category
                                ? 'text-white'
                                : 'text-black-200'}`}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Filters;
