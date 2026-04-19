import {
    LocalShippingOutlined,
    Inventory2Outlined,
    GppGoodOutlined,
} from '@mui/icons-material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../../Contexts/CartContext';
import { wishlistContext } from '../../Contexts/WishlistContext';

/**
 * Info Component
 * 
 * Displays detailed product information including price, color options, 
 * storage capacity, and technical specifications.
 * Handles "Add to Cart" and "Add to Wishlist" actions.
 */

export default function Info() {
    const { item } = useLocation().state;
    const { addToCart } = useContext(cartContext);
    const { addToWishlist } = useContext(wishlistContext);
    const [showToast, setShowToast] = useState(false);


    return (
        <div className="flex-1 ">
            <h1 className="text-[32px] font-bold mb-4">{item.title}</h1>
            <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-bold ">${item.price}</span>
                <span className="text-xl text-gray-400 line-through ">${(item.price + (item.price * (item.discountPercentage
                    / 100))).toFixed(2)}</span>
            </div>
            {item.title !== 'Watch' && (
                <>
                    {/* Color selection */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-500 w-24">Select color:</span>
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-black cursor-pointer border-2 border-gray-300 ring-2 ring-transparent hover:ring-gray-200 transition-all"></div>
                            <div className="w-8 h-8 rounded-full bg-[#5c4b78] cursor-pointer ring-2 ring-purple-300 ring-offset-2 transition-all"></div>
                            <div className="w-8 h-8 rounded-full bg-[#a31a28] cursor-pointer ring-2 ring-transparent hover:ring-red-200 transition-all"></div>
                            <div className="w-8 h-8 rounded-full bg-[#f6dd90] cursor-pointer ring-2 ring-transparent hover:ring-yellow-200 transition-all"></div>
                            <div className="w-8 h-8 rounded-full bg-[#e3e4e9] cursor-pointer ring-2 ring-transparent hover:ring-gray-200 transition-all"></div>
                        </div>
                    </div>

                    {/* Storage selection */}
                    <div className="flex gap-3 mb-8">
                        {['128GB', '256GB', '512GB', '1TB'].map((size) => (
                            <button
                                key={size}
                                className={`flex-1 py-3 cursor-pointer rounded-xl border text-sm font-medium duration-200 ${size === '512GB' ? 'border-gray-800 text-gray-900 border-2' : 'border-gray-300 text-gray-500 hover:border-gray-400'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                </>
            )}
            <p className="text-[15px] text-gray-500 mb-8">
                {item.description}
            </p>

            <div className="flex gap-4 mb-8">
                <button className="flex-1 cursor-pointer py-4 px-6 rounded-xl border-2 border-gray-900 font-semibold text-center hover:bg-gray-100 duration-200"
                    onClick={() => {
                        addToWishlist(item);
                        setShowToast(true);
                        setTimeout(() => {
                            setShowToast(false);
                        }, 3000);
                    }}
                >
                    Add to Wishlist
                </button>
                <button className="flex-1 cursor-pointer py-4 px-6 rounded-xl bg-black text-white font-semibold text-center hover:bg-gray-900 duration-200 shadow-lg shadow-black/20"
                    onClick={() => {
                        addToCart(item);
                        setShowToast(true);
                        setTimeout(() => {
                            setShowToast(false);
                        }, 3000);
                    }}
                >
                    Add to Cart
                </button>
            </div>

            {/* Store Features */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 px-2">
                <div className="flex items-center gap-4">
                    <div className="bg-[#f2f2f2] w-12 h-12 rounded-full flex items-center justify-center text-gray-500">
                        <LocalShippingOutlined fontSize="small" />
                    </div>
                    <div><p className="font-semibold text-sm text-gray-800">Free Delivery</p><p className="text-xs text-gray-500 font-medium mt-1">1-2 days</p></div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-[#f2f2f2] w-12 h-12 rounded-full flex items-center justify-center text-gray-500">
                        <Inventory2Outlined fontSize="small" />
                    </div>
                    <div><p className="font-semibold text-sm text-gray-800">{item.availabilityStatus} </p><p className="text-xs text-gray-500 font-medium mt-1">Today</p></div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-[#f2f2f2] w-12 h-12 rounded-full flex items-center justify-center text-gray-500">
                        <GppGoodOutlined fontSize="small" />
                    </div>
                    <div><p className="font-semibold text-sm text-gray-800">Warranty</p><p className="text-xs text-gray-500 font-medium mt-1">{item.warrantyInformation}</p></div>
                </div>
            </div>
            {/* Success Toast */}
            {showToast && (
                <div className='fixed bottom-4 right-4 bg-white p-4 rounded-xl shadow-xl shadow-black/10 border border-gray-200 text-center z-50 animate-bounce'>
                    <div className='text-gray-800 flex items-center gap-2 font-medium'>
                        <AddTaskIcon sx={{ fontSize: "24px", color: "#22c55e" }} />
                        <span>Item Added Successfully!</span>
                    </div>
                </div>
            )}
        </div >
    );
}