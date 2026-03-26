// Context for wishlist Items

import { createContext, useState, useEffect } from 'react';

export const wishlistContext = createContext({
    wishlistItems: [],
    addToWishlist: () => { },
    removeFromWishlist: () => { },
});

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlistItems");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (item) => {
        setWishlistItems((prev) => {
            const existing = prev.find(i => i.id === item.id);

            if (!existing) {
                return [...prev, item];
            }
            return prev;
        });
    };

    const removeFromWishlist = (item) => {
        setWishlistItems(wishlistItems.filter(wishlistItem => wishlistItem.id !== item.id));
    };

    return (
        <wishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
            {children}
        </wishlistContext.Provider>
    );
};