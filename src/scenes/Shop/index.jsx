import Filters from "./Filters";
import Products from "./Products";
import { useEffect, useState, useContext } from "react";
import categoryContext from "../../Contexts/CategoryContext";

import { Phones, Tablets, Watches } from "../../../public/Data/productsData";

export default function Shop() {
    const [showFilters, setShowFilters] = useState(false);
    const [products, setProducts] = useState(Phones);
    const { cat, setCat } = useContext(categoryContext);
    const [currentPage, setCurrentPage] = useState(1);


    // Filter Products
    useEffect(() => {
        if (cat === "SmartPhones") {
            setProducts(Phones);
        } else if (cat === "Tablets") {
            setProducts(Tablets);
        } else {
            setProducts(Watches);
        }
        setCurrentPage(1);
    }, [cat]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className=" relative">
            <div className="py-10 flex container mx-auto p-1 gap-0 sm:gap-5">
                <Filters showFilters={showFilters} setShowFilters={setShowFilters} cat={cat} setCat={setCat} />
                <Products Products={products} onClick={() => setShowFilters(false)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}