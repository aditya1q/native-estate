export const filterCardsByCategory = (cards, selectedCategory, limit = null) => {
    let filteredCards = selectedCategory === "All"
        ? cards
        : cards.filter((card) => card.category === selectedCategory);

    return limit ? filteredCards.slice(0, limit) : filteredCards;
};
