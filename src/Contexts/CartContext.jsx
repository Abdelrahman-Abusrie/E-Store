// Context for cart Items

import { createContext, useState, useEffect } from "react";

export const cartContext = createContext({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    updateQuantity: () => { },
    clearCart: () => { },
    subtotal: 0,
    tax: 0,
    total: 0,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        if (!item.isInStock) return;

        setCartItems((prev) => {
            const existing = prev.find(i => i.id === item.id);

            if (existing) {
                return prev.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity }
                        : i
                );
            }

            return [...prev, { ...item, quantity: item.quantity || 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) =>
            prev.filter((cartItem) => cartItem.id !== id)
        );
    };

    const updateQuantity = (id, delta) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + delta,
                    };
                }
                return item;
            }).filter(item => item.quantity > 0)
        );
    };




    const clearCart = () => {
        setCartItems([]);
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
        <cartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                subtotal,
                tax,
                total,
            }}
        >
            {children}
        </cartContext.Provider>
    );
};