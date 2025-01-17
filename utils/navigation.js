export const handleCardPress = (data, router) => {
    router.push({
        pathname: `/properties/${data?.id}`,
        params: {
            title: data?.title,
            location: data?.location,
            rating: data?.rating,
            image: data?.image,
            category: data?.category,
            price: data?.price
            // Add more fields as needed
        },
    });
};