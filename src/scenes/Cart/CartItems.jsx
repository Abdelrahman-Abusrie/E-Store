import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';

/**
 * CartItems Component
 * 
 * Displays a list of items currently in the cart with options to increment, decrement, or remove items.
 */

export default function CartItems() {

    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart } = useContext(cartContext);


    return (
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-6">
            {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-100 rounded-3xl p-4 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch sm:h-40 shadow-sm">
                    {/* Product Image */}
                    <div className="bg-white rounded-xl p-2 w-40 flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="h-full object-contain max-h-32" />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between w-full">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                                <p className="text-gray-500 text-sm mt-1">{item.variant}</p>
                            </div>
                            <div className="text-xl font-bold text-blue-600">
                                ${item.price.toFixed(2)}
                            </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex justify-between items-center mt-6 sm:mt-0">
                            <div className="flex items-center bg-gray-200 rounded-full px-2 py-1">
                                <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="w-8 h-8 flex items-center justify-center cursor-pointer duration-300 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
                                >
                                    <RemoveIcon fontSize="small" />
                                </button>
                                <span className="w-10 text-center font-semibold text-gray-800">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="w-8 h-8 flex items-center justify-center cursor-pointer duration-300 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
                                >
                                    <AddIcon fontSize="small" />
                                </button>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-500 cursor-pointer duration-300 hover:text-red-500 flex items-center gap-1 transition-colors text-sm font-medium"
                            >
                                <DeleteOutlineIcon fontSize="small" />
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Empty Cart State */}
            {cartItems.length === 0 && (
                <div className="bg-gray-100 rounded-3xl p-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
                    <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                </div>
            )}

            {/* Continue Shopping Link */}
            <div className="mt-4">
                <button
                    onClick={() => navigate('/shop')}
                    className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-700 font-semibold transition-colors"
                >
                    <KeyboardBackspaceIcon />
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}