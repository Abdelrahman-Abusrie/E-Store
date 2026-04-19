import Filters from "./Filters";
import Products from "./Products";
import { useEffect, useState, useContext, useMemo } from "react";
import categoryContext from "../../Contexts/CategoryContext";
import FilterContext from "../../Contexts/FilterContext";
import ProductsContext from "../../Contexts/ProductsContext";

export default function Shop() {
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { cat, setCat } = useContext(categoryContext);
    const { selectedBrand, setSelectedBrand, maxPrice, setMaxPrice } = useContext(FilterContext);
    const { products, brands } = useContext(ProductsContext);

    const categoryMap = {
        'SmartPhones': 'phones',
        'Laptops': 'laptops',
        'Watches': 'watches'
    };
    const currentCategory = categoryMap[cat] || 'phones';

    useEffect(() => {
        setSelectedBrand('all');
        setMaxPrice(2000);
    }, [cat, setSelectedBrand, setMaxPrice]);

    const currentProducts = useMemo(() => {
        const baseProducts = products[currentCategory] || [];
        const maxPriceVal = maxPrice !== undefined ? maxPrice : 2000;

        return baseProducts.filter(p => {
            const matchesBrand = (!selectedBrand || selectedBrand === 'all') || p.brand === selectedBrand;
            const matchesPrice = p.price <= maxPriceVal;
            return matchesBrand && matchesPrice;
        });
    }, [cat, products, currentCategory, selectedBrand, maxPrice]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentPage(1);
    }, [cat]);

    if (currentProducts.length === 0) {
        return (
            <div className="py-10 flex container mx-auto p-1 gap-0 sm:gap-5">
                <Filters
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                    cat={cat}
                    setCat={setCat}
                    availableBrands={brands[currentCategory] || []}
                    selectedBrand={selectedBrand}
                    onBrandSelect={setSelectedBrand}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                />
                <div className="flex-1 bg-gray-50 p-10 rounded-sm flex flex-col items-center justify-center text-center h-[60vh]">
                    <h3 className="text-2xl font-bold text-gray-400 mb-2">No products found...</h3>
                    <p className="text-gray-500">Please try adjusting your filters.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="py-10 flex container mx-auto p-1 gap-0 sm:gap-5">
                <Filters
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                    cat={cat}
                    setCat={setCat}
                    availableBrands={brands[currentCategory] || []}
                    selectedBrand={selectedBrand}
                    onBrandSelect={setSelectedBrand}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                />
                <Products
                    key={`${cat}-${selectedBrand}`}
                    Products={currentProducts}
                    onClick={() => setShowFilters(false)}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
}
