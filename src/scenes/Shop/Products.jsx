import Item from "../../components/Item";
import { useState, useEffect } from "react";





export default function Products({ onClick, Products, currentPage, setCurrentPage }) {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [Products, currentPage]);

    // Display 12 Products per Page 
    const PER_PAGE = 12;
    const TOTAL_PAGES = Math.ceil(Products.length / PER_PAGE);
    const start = (currentPage - 1) * PER_PAGE;
    const items = Products.slice(start, start + PER_PAGE);

    const products = items.map((item) => {
        return <Item key={item.id} item={item} />;
    });

    // Skeleton Loader Component
    if (isLoading) {
        return (
            <div className="flex-1 bg-gray-50 p-2 sm:p-5 rounded-sm">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-5"></div>
                <div className="grid grid-cols-12 gap-3">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-2xl h-[380px] p-4 border border-gray-100">
                            <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
                            <div className="flex justify-between mt-auto pt-4 border-t">
                                <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // No Products Found
    if (Products.length === 0 && !isLoading) {
        return (
            <div className="flex-1 bg-gray-50 p-10 rounded-sm flex flex-col items-center justify-center text-center h-[60vh]">
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No Products Found</h3>
                <p className="text-gray-500">Try adjusting your filters or category selection.</p>
            </div>
        );
    }

    return (
        <div onClick={onClick} className="flex-1 bg-gray-50 p-2 sm:p-5 rounded-sm" >
            <div className="flex">
                <h3>Selected Products: <span className="font-semibold">{Products.length}</span></h3>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-5">
                {products}
            </div>
            {/* Pagination */}
            <div className="pt-7 flex justify-center">
                <div className="flex gap-5 items-center">
                    <button
                        className={`${(currentPage <= 1) ? 'text-gray-400 cursor-not-allowed' : 'text-black cursor-pointer'} py-1 px-2  font-semibold uppercase bg-gray-200 rounded-md`}
                        onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                            }
                            window.scrollTo(0, 0);

                        }}
                    >Previous</button>
                    <span className="font-semibold">{currentPage}/{TOTAL_PAGES}</span>
                    <button
                        className={`${(currentPage >= TOTAL_PAGES) ? 'text-gray-400 cursor-not-allowed' : 'text-black cursor-pointer'} py-1 px-2  font-semibold uppercase bg-gray-200 rounded-md`}
                        onClick={() => {
                            if (currentPage < TOTAL_PAGES) {
                                setCurrentPage(currentPage + 1);
                            }
                            window.scrollTo(0, 0);
                        }}
                    >Next</button>
                </div>
            </div>
        </div>
    );
}