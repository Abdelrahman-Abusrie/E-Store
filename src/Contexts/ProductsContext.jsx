import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext({
    allProducts: [],
    products: {
        phones: [],
        laptops: [],
        watches: [],
    },
    brands: {
        phones: [],
        laptops: [],
        watches: [],
    },
    setProducts: () => { },
    setAllProducts: () => { }
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({
        phones: [],
        laptops: [],
        watches: [],
    });

    const allProducts = [...products.phones, ...products.laptops, ...products.watches];

    // Computed brands per category
    const brands = {
        phones: products.phones.length > 0 ? [...new Set(products.phones.map(p => p.brand))].sort() : [],
        laptops: products.laptops.length > 0 ? [...new Set(products.laptops.map(p => p.brand))].sort() : [],
        watches: products.watches.length > 0 ? [...new Set(products.watches.map(p => p.brand))].sort() : [],
    };

    useEffect(() => {

        const loadPhones = async () => {
            const res = await fetch('https://dummyjson.com/products/category/smartphones');
            const json = await res.json();

            setProducts(prev => ({
                ...prev,
                phones: json.products || []
            }));
        };

        const loadLaptops = async () => {
            const res = await fetch('https://dummyjson.com/products/category/laptops');
            const json = await res.json();

            setProducts(prev => ({
                ...prev,
                laptops: json.products || []
            }));
        };

        const loadWatches = async () => {
            const res = await fetch('https://dummyjson.com/products/search?q=watch');
            const json = await res.json();

            setProducts(prev => ({
                ...prev,
                watches: json.products || []
            }));
        };

        loadPhones();
        loadLaptops();
        loadWatches();
    }, []);

    return (
        <ProductsContext.Provider value={{ allProducts, products, brands, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;