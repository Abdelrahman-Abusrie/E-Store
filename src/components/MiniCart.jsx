import { useContext } from "react";
import { cartContext } from "../Contexts/CartContext";
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";

/**
 * MiniCart Component
 * 
 * A slide-out drawer showing a quick view of the cart contents.
 * Allows users to remove items or proceed to the full cart page.
 * 
 */
export default function MiniCart({ isCartOpen, setIsCartOpen }) {
    const { cartItems, removeFromCart, subtotal } = useContext(cartContext);
    const navigate = useNavigate();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col transform transition-transform duration-300">

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-gray-800">Shopping Cart ({cartItems.length})</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-1.5 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full duration-300 flex justify-center items-center"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length === 0 ? (
                        // Empty cart message
                        <div className="text-center text-gray-500 mt-10">
                            <p>Your cart is empty.</p>
                            <button
                                onClick={() => { setIsCartOpen(false); navigate('/shop'); }}
                                className="mt-4 cursor-pointer text-blue-600 font-semibold hover:underline"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b pb-4 last:border-0">
                                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden ">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{item.quantity} x ${item.price}</p>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <p className="font-semibold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-400 cursor-pointer hover:text-red-600 p-1"
                                    >
                                        <DeleteOutlineIcon fontSize="small" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-4 border-t bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600 font-medium">Subtotal</span>
                            <span className="text-xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => { setIsCartOpen(false); navigate('/cart'); }}
                            className=" cursor-pointer w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                        >
                            View Cart & Checkout
                        </button>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="w-full cursor-pointer mt-2 py-2 text-gray-500 hover:text-gray-800 text-sm"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}