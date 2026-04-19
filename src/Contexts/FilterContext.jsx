import { createContext, useState } from "react";

const FilterContext = createContext({
    selectedCategory: 'phones',
    selectedBrand: 'all',
    maxPrice: 2000,
    setSelectedCategory: () => { },
    setSelectedBrand: () => { },
    setMaxPrice: () => { },
});

export const FilterProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('phones');
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [maxPrice, setMaxPrice] = useState(2000);

    return (
        <FilterContext.Provider value={{
            selectedCategory,
            selectedBrand,
            maxPrice,
            setSelectedCategory,
            setSelectedBrand,
            setMaxPrice
        }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterContext;

